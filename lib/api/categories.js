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
    `,
    {},
    preview
  )

  return categoriesData.listCategories.data
}