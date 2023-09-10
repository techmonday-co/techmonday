async function fetchAPI(query, { variables } = {}, preview ) {
  const url = preview ? process.env.NEXT_PUBLIC_WEBINY_PREVIEW_API_URL : process.env.NEXT_PUBLIC_WEBINY_API_URL
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.WEBINY_API_SECRET}`
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}


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

export async function getPosts() {
  const data = await fetchAPI(`
    query Posts {
      listPosts(sort: [date_DESC], limit: 6) {
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
  `)
  return data?.listPosts.data
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

  console.log(categories)

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

export async function getCategories(preview) {
  const categoriesData = await fetchAPI(
    `
    query Categories {
      listCategories(where: { trending: true }, limit: 6) {
        data {
          name
          slug
          image
        }
      }
    }
    `,
    {},
    preview
  )

  return categoriesData.listCategories.data
}

export async function getTags(preview) {
  const tagsData = await fetchAPI(
    `
    query Tags {
      listTags(where: { trending: true }, limit: 6) {
        data {
          name
          slug
        }
      }
    }
    `,
    {},
    preview
  )

  return tagsData.listTags.data
}

export async function getAuthors(preview) {
  const authorsData = await fetchAPI(
    `
    query Authors {
      listAuthors(where: { trending: true }, limit: 6) {
        data {
          name
          slug
        }
      }
    }
    `,
    {},
    preview
  )

  return authorsData.listAuthors.data
}