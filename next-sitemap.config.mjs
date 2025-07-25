const SITE_URL = process.env.SITE_URL || 'https://nocodenobrain.com'

const NEXT_SSG_FILES = ['/*.json$', '/*_buildManifest.js$', '/*_middlewareManifest.js$', '/*_ssgManifest.js$', '/*.js$']

const exclude = ['/tags/*']

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
}

export default config