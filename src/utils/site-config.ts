import type { SiteConfig } from '~/types'

export const siteConfig: SiteConfig = {
  site: {
    title: 'Astro Starter',
    subtitle: 'Lorem',
    description: 'Personal site starter',
    author: '@roblesdotdev',
    favicon: '/favicon.svg',
    url: 'http://localhost:3000',
    keywords: ['astro', 'starter'],
    image: '/og.png',
  },
  color: {
    mode: 'dark',
    light: '#fff',
    dark: '#111',
  },
  seo: {
    verification: {},
  },
}
