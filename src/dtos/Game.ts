export type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publish: string
    languages: string[]
  }

  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
