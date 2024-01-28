import { fetchAPI } from "../api";

const AUTHORS_QUERY = `
  query Authors(
    $perPage: Int!,
    $cursor: String
  ) {
    listAuthors(sort: [name_ASC], limit: $perPage, after: $cursor) {
      data {
        name
        picture
        slug
        designation
        bio
        facebook
        twitter
        instagram
        linkedIn
      },
      meta {
        hasMoreItems
        totalCount
        cursor
      }
    }
  }
`
const TRENDING_AUTHORS = `
  query Authors(
    $perPage: Int!,
    $cursor: String
  ) {
    listAuthors(sort: [name_ASC], limit: $perPage, after: $cursor, where: { trending: true }) {
      data {
        name
        picture
        slug
        designation
        bio
        facebook
        twitter
        instagram
        linkedIn
      },
      meta {
        hasMoreItems
        totalCount
        cursor
      }
    }
  }
`

export async function fetchAuthors(cursor, perPage, trending) {
  const data = await fetchAPI(trending ? TRENDING_AUTHORS : AUTHORS_QUERY
    , {
      variables: {
        perPage: perPage || 6,
        cursor
      }
    }
  )

  return data?.listAuthors
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
    const totalAuthorsToFetch = (pageNumber - 1) * perPage;
    const data = await fetchAuthors("", totalAuthorsToFetch);

    // The cursor for the desired page will be the cursor of the last post
    return data.meta.cursor;
  }
}

export async function getAuthors({trending, perPage, page = 1}) {
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

  return await fetchAuthors(cursor, perPage, trending);
}

export async function getAuthorCount() {
  const data = await fetchAPI(
    `
    query AuthorCount {
      listAuthors {
        meta {
          totalCount
        }
      }
    }
    `, 
    {}
  )
  return data.listAuthors.meta.totalCount;
}

export async function getAllAuthors(preview) {
  const data = await fetchAPI(
    `
    query Authors {
      listAuthors {
        data {
          name
          slug
          entryId
        }
      }
    }
    `,
    {},
    preview
  )
  return data?.listAuthors.data
}

export async function getAuthorBySlug(slug, preview) {
  
  const authorData = await fetchAPI(
    `
      query AuthorBySlug( $AuthorGetWhereInput: AuthorGetWhereInput!) {
        author: getAuthor( where: $AuthorGetWhereInput ) {
          data {
            name
            picture
            designation
            bio
            facebook
            twitter
            instagram
            linkedIn
            entryId
          }
        }
      }
    `,
      {
        variables: {
          AuthorGetWhereInput:{
            slug: slug
          }
        }
      },
      preview
  )

  const postsData = await fetchAPI(
    `
    query GetPostsForCategory(
        $authorId: String!
      ) {
      posts: listPosts(where: { authors: {entryId_in: [$authorId]} }) {
        data {
          title
          description
          slug
          coverImage
          categories {
            name
            slug
          }
          authors {
            name
            picture
            facebook
            twitter
            instagram
            linkedIn
            slug
          }
        }
      }
    }
    `,
    {
      variables: {
        authorId: authorData.author.data.entryId || ""
      }
    },
    preview
  )

  return {
    ...authorData.author.data,
    posts: postsData.posts.data
  }
}