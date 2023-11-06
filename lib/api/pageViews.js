import { google } from "googleapis"

export default async function getPageViews(pagePath) {
  console.log(pagePath)
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    })

    const analyticsData = google.analyticsdata({
      version: 'v1beta',
      auth,
    });

    const response = await analyticsData.properties.runReport({
      property: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY,
      requestBody: {
        dateRanges: [
          {
            startDate: '2023-11-1',
            endDate: 'today'
          }
        ],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        dimensionFilter: {
          filter: {
            fieldName: 'pagePath',
            stringFilter: {
              matchType: 'EXACT',
              value: pagePath,
            },
          },
        },
      }
    })

    // Parse the response to get the page views
    const pageViews = response.data.rows.map(row => ({
      pagePath: row.dimensionValues[0].value,
      pageViews: row.metricValues[0].value,
    }))[0];

    return pageViews;

  } catch (err) {
    console.log(err.message)
  }
}