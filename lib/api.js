export async function fetchAPI(query, { variables } = {}, preview ) {
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





