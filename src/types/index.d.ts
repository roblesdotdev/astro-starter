export type SiteConfig = {
  site: {
    title: string
    subtitle: string
    description: string
    author: string
    url: string
    favicon: string
  }
  color: {
    mode: 'dark' | 'light'
    light: string
    dark: string
  }
  seo?: {
    twitterID?: string
    verification?: {
      google?: string
      bing?: string
      yandex?: string
      baidu?: string
    }
    googleAnalyticsID?: string
    umamiAnalyticsID?: string
    follow?: {
      feedID?: string
      userID?: string
    }
    apiflashKey?: string
  }
}
