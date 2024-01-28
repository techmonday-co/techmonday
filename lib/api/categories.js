import { fetchAPI } from "../api"

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
    `, {},
    preview
  )

  return categoriesData.listCategories.data
}

export async function getAllCategories(preview) {
  const data = await fetchAPI(
    `
    query Categories {
      listCategories {
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
  return data?.listCategories.data
}

export async function getCategoryBySlug(slug, preview) {
  const categoryData = await fetchAPI(
    `
      query CategoryBySlug( $CategoryGetWhereInput: CategoryGetWhereInput!) {
        category: getCategory( where: $CategoryGetWhereInput ) {
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
          CategoryGetWhereInput:{
            slug: slug
          }
        }
      },
      preview
  )

  const postsData = await fetchAPI(
    `
    query GetPostsByCategory(
        $categoryId: String!
      ) {
      posts: listPosts(where: { categories: {entryId_in: [$categoryId]} }) {
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
        categoryId: categoryData.category.data.entryId || ""
      }
    },
    preview
  )

  return {
    ...categoryData.category.data,
    posts: postsData.posts.data
  }
}
