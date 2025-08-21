import type { SiteConfig } from '~/types'

export const siteConfig = {
  site: {
    title: 'Astro Starter',
    subtitle: 'Lorem',
    description: 'Personal site starter',
    author: '@roblesdotdev',
    favicon: '/favicon.svg',
    url: 'http://localhost:3000',
  },
  color: {
    mode: 'dark',
    light: '#fff',
    dark: '#111',
  },
} satisfies SiteConfig
