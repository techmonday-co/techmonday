import { fetchAPI } from "../api";

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