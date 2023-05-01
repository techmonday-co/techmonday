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


export async function getAllPodcastsWithSlug() {
  const data = await fetchAPI(`
    query PostSlugs {
      listPodcasts {
        data {
          slug
        }
      }
    }
  `)
  return data?.listPodcasts.data
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
      `
      query Podcasts {
        listPodcasts {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            guest {
              name
              picture
            }
          }
        }
      }
    `,
    {},
    preview
  )
  console.log(data);
  return data.listPodcasts.data
}

export async function getPodcastBySlug(slug, preview) {
  const data = await fetchAPI(

    `
      query PodcastBySlug( $PodcastGetWhereInput: PodcastGetWhereInput!) {
        post: getPodcast( where: $PodcastGetWhereInput ) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            body
            guest {
              name
              picture
            }
          }
        }
        morePosts: listPodcasts(limit: 2, sort: createdOn_ASC) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            guest {
              name
              picture
      
            }
          }
        }
      }
    `,
      {
        variables: {
          PodcastGetWhereInput:{
            slug: slug
          }
        }
      },
      preview
  )
  return data
}