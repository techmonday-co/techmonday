const withTM = require('next-transpile-modules')(['react-share-kit']);

module.exports = withTM({
    images: {
      domains: ['d16nhgqznszc7v.cloudfront.net', 'd3mn3ke5gao0ah.cloudfront.net'],
      unoptimized: true,
    },
    // Disable SWC minification
    swcMinify: false,

    // output: 'export',
  })