import Head from 'next/head';

const HeadTitle = ({pageTitle}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{`${pageTitle} || Tech Monday`}</title>
      <meta name="description" content="Tech Monday" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Facebook Meta Tags  */}
      <meta property="og:url" content="https://techmonday.co" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${pageTitle}`} />
      <meta property="og:description" content="Tech Monday" />

      {/* You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/{site_text}/{title_text}/{image_url}/og.png
  Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
  For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images */}

      <meta property="og:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/techmonday.co/Tech%20Monday%20%7C%7C%20Tech%20Monday/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F56188dc2-e3c3-4ce5-a8b1-1323953e37b9.jpg%3Ftoken%3DFORiB3YuXMB9HERtclPAWWBLMSBisufr3mJbjlWtsrQ%26height%3D800%26width%3D1200%26expires%3D33239445186/og.png"></meta>


      <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon.ico`} />
    </Head>
  )
}

export default HeadTitle;