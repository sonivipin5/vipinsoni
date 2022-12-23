/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://vipinsoni.ga',
    generateRobotsTxt: true,
    robotsTxtOptions:{
      policies:[
        {userAgent:'*', disallow: "/modal"}
      ]
    },
    sitemapSize: 7000,
    generateIndexSitemap: true,
    exclude:['/modal']
  }