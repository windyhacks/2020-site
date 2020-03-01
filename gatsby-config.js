const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'windyhacks',
    siteUrl: 'https://windyhacks.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'windyhacks',
        short_name: 'windyhacks',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007a87',
        display: 'minimal-ui'
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/flag-bright.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-no-sourcemaps'
  ]
}
