import { fetchAPI } from "../api"

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    query PostSlugs {
      listPosts {
        data {
          slug
        }
      }
    }
  `)
  return data?.listPosts.data
}

const cursorCache = {};

async function fetchCursorForPage(pageNumber, perPage) {
  // Implement the logic to fetch cursor for the given page number
  // This might involve fetching all posts up to that page sequentially
  // and then returning the cursor of the last post of the last fetched page
  if (pageNumber === 1) {
    return ""; // For the first page, the cursor is usually an empty string
  } else {
    // Calculate the number of posts to fetch to reach the desired page
    const totalPostsToFetch = (pageNumber - 1) * perPage;
    const data = await fetchPosts("", totalPostsToFetch);

    // The cursor for the desired page will be the cursor of the last post
    return data.meta.cursor;
  }
}

async function fetchPosts(cursor, perPage) {
  // console.log('fetchPost with cursor: ' + cursor + ', and perPage = ' + perPage)
  // Implement the logic to fetch posts using cursor and perPage
  const data = await fetchAPI(`
    query Posts(
      $perPage: Int!,
      $cursor: String,
    ) {
      listPosts(sort: [date_DESC], limit: $perPage, after: $cursor) {
        data {
          id
          title
          slug
          description
          createdOn
          coverImage
          hero
          featured
          date
          authors {
            name
            picture
            facebook
            twitter
            instagram
            linkedIn
            slug
          }
          categories {
            name
            slug
          }
        },
        meta {
          hasMoreItems
          totalCount
          cursor
        }
      }
    }
  `, {
    variables: {
      perPage: perPage || 6,
      cursor
    }
  })

  return data?.listPosts
}

export async function getPosts({perPage, page = 1}) {
  let cursor;

  // console.log('check cursorCache')
  // console.log(cursorCache)
  if (cursorCache[page]) {
    cursor = cursorCache[page];
    // console.log('hitting cache ' + cursor)
  } else {
    cursor = await fetchCursorForPage(page, perPage);
    cursorCache[page] = cursor; // Cache the cursor for future use
  }

  return await fetchPosts(cursor, perPage);
}

export async function getHeroPosts(preview) {
  const data = await fetchAPI(
    `
    query Posts {
      listPosts(where: {hero: true} ) {
        data {
          id
          title
          slug
          description
          createdOn
          coverImage
          hero
          featured
          date
          authors {
            name
            picture
            facebook
            twitter
            instagram
            linkedIn
            slug
          }
          categories {
            name
            slug
          }
        }
      }
    }
    `,
    {},
    preview
  )
  return data.listPosts.data;
}

export async function getFeaturedPosts(preview) {
  const data = await fetchAPI(
    `
    query Posts {
      listPosts(where: {featured: true} ) {
        data {
          id
          title
          slug
          description
          createdOn
          coverImage
          hero
          featured
          date
          authors {
            name
            picture
            facebook
            twitter
            instagram
            linkedIn
            slug
          }
          categories {
            name
            slug
          }
        }
      }
    }
    `,
    {},
    preview
  )

  return data.listPosts.data;
}

export async function getPostBySlug(slug, preview) {
  const data = await fetchAPI(
    `
      query PostBySlug( $PostGetWhereInput: PostGetWhereInput!) {
        post: getPost( where: $PostGetWhereInput ) {
          data {
            id
            title
            slug
            description
            createdOn
            coverImage
            hero
            featured
            date
            authors {
              name
              picture
              designation
              bio
              facebook
              twitter
              instagram
              linkedIn
              slug
            }
            format {
              name
            }
            videoLink
            categories {
              name
              slug
            }
            tags {
              name
              slug
            }
          }
        }
        morePosts: listPosts(limit: 2, sort: createdOn_ASC) {
          data {
            id
            title
            slug
            description
            createdOn
            coverImage
            hero
            featured
            date
            authors {
              name
              picture
              designation
              bio
              facebook
              twitter
              instagram
              linkedIn
            }
            format {
              name
            }
            categories {
              name
              slug
            }
            tags {
              name
              slug
            }
          }
        }
      }
    `,
      {
        variables: {
          PostGetWhereInput:{
            slug: slug
          }
        }
      },
      preview
  )
  return data
}

export async function getPostsByHighLightedCategories(preview) {
  const categoriesData = await fetchAPI(
    `
    query Categories {
      listCategories(where: { featured: true }, limit: 4) {
        data {
          name
          entryId
          slug
        }
      }
    }
    `,
    {},
    preview
  )

  const categories = categoriesData.listCategories.data.map((category) => {
    return {
      id: category.entryId,
      name: category.name,
      slug: category.slug
    }
  })

  const postData = await fetchAPI(
    `
    query GetPostsForCategory(
        $category1: String!,
        $category2: String!,
        $category3: String!,
        $category4: String!
      ) {
      postCat1 : listPosts(where: { categories: {entryId_in: [$category1]} }, limit: 3) {
        data {
          title
          description
          slug
          coverImage
        }
      }
      postCat2 : listPosts(where: { categories: {entryId_in: [$category2]} }, limit: 3) {
        data {
          title
          description
          slug
          coverImage
        }
      }
      postCat3 : listPosts(where: { categories: {entryId_in: [$category3]} }, limit: 3) {
        data {
          title
          description
          slug
          coverImage
        }
      }
      postCat4 : listPosts(where: { categories: {entryId_in: [$category4]} }, limit: 3) {
        data {
          title
          description
          slug
          coverImage
        }
      }
    }
    `,
    {
      variables: {
        category1: categories[0]?.id || "",
        category2: categories[1]?.id || "",
        category3: categories[2]?.id || "",
        category4: categories[3]?.id || ""
      }
    },
    preview
  )
  const postsByCategory = Object.values(postData).map(item => item.data);

  return categories.map((category, index) => {
    return {
      category: {
        id: category.id,
        name: category.name,
        slug: category.slug
      },
      posts: postsByCategory[index]
    }
  })
}

export async function getPopularPosts(preview) {
  const data = await fetchAPI(
    `
    query Posts {
      listPosts(where: {popular: true} ) {
        data {
          id
          title
          slug
          description
          createdOn
          coverImage
          hero
          featured
          date
          authors {
            name
            picture
            facebook
            twitter
            instagram
            linkedIn
            slug
          }
          categories {
            name
            slug
          }
        }
      }
    }
    `,
    {},
    preview
  )
  return data.listPosts.data;
}

export async function getPostCount() {
  const data = await fetchAPI(
    `
    query PostCount {
      listPosts {
        meta {
          totalCount
        }
      }
    }
    `, 
    {}
  )
  return data.listPosts.meta.totalCount;
}