export type SiteConfig = {
  site: {
    title: string
    subtitle: string
    description: string
    author: string
    url: string
    favicon: string
    keywords: string[]
    image: string
  }
  color: {
    mode: 'dark' | 'light'
    light: string
    dark: string
  }
  seo?: {
    verification?: {
      google?: string
      bing?: string
      yandex?: string
      baidu?: string
    }
  }
}
