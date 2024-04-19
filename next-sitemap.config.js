/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://techmonday.co',
  generateRobotsTxt: true, // (optional),
  sitemapSize: 7000,
  outDir: 'out',
}