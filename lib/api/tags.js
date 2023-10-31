import { fetchAPI } from "../api"

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

export async function getAllTags(preview) {
  const data = await fetchAPI(
    `
    query Tags {
      listTags {
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
  return data?.listTags.data
}

export async function getTagBySlug(slug, preview) {
  const tagData = await fetchAPI(
    `
      query TagBySlug( $TagGetWhereInput: TagGetWhereInput!) {
        tag: getTag( where: $TagGetWhereInput ) {
          data {
            name
            slug
            entryId
          }
        }
      }
    `,
      {
        variables: {
          TagGetWhereInput:{
            slug: slug
          }
        }
      },
      preview
  )

  const postsData = await fetchAPI(
    `
    query GetPostsByTag(
        $tagId: String!
      ) {
      posts: listPosts(where: { tags: {entryId_in: [$tagId]} }) {
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
        tagId: tagData.tag.data.entryId || ""
      }
    },
    preview
  )

  return {
    ...tagData.tag.data,
    posts: postsData.posts.data
  }
}
