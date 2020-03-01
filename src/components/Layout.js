import React from 'react'
import Helmet from 'react-helmet'
import data from '../data.json'
import { theme } from '../theme'
import ThemeProvider from '../theme'
import BG from '../components/BG'
import '../../static/fonts.css'

const { name, title, description, img, url, org, event } = data

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({ bg, children }) => (
  <ThemeProvider>
    <Helmet title={title}>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <meta name="theme-color" content={theme.colors.primary} />
      {meta([
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:domain', content: url },
        { name: 'twitter:site', content: url },
        { name: 'twitter:image', content: img },
        { name: 'twitter:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: img },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: name },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url }
      ])}
      <script type="application/ld+json" children={JSON.stringify(org)} />
      <script type="application/ld+json" children={JSON.stringify(event)} />
    </Helmet>
    {bg && <BG color={bg} />}
    {children}
  </ThemeProvider>
)
