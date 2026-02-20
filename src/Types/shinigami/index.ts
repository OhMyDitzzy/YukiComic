export type ShinigamiHomepageData = {
  retcode: number
  message: string
  meta: {
    request_id: string
    timestamp: number
    process_time: string
    page: number
    page_size: number
    total_page: number
    total_record: number
  }
  data: Array<{
    alternative_title: string
    bookmark_count: number
    country_id: string
    cover_image_url: string
    cover_portrait_url: string
    created_at: string
    deleted_at: any
    description: string
    is_recommended: boolean
    latest_chapter_id: string
    latest_chapter_number: number
    latest_chapter_time: string
    manga_id: string
    rank: number
    release_year: string
    status: number
    taxonomy: {
      Artist?: Array<{
        name: string
        slug: string
      }>
      Author: Array<{
        name: string
        slug: string
      }>
      Format: Array<{
        name: string
        slug: string
      }>
      Genre: Array<{
        name: string
        slug: string
      }>
      Type: Array<{
        name: string
        slug: string
      }>
    }
    title: string
    updated_at: string
    user_rate: number
    view_count: number
  }>
  facet: {
    release_year: {
      [key: string]: number
    }
    "taxonomy.Artist.name": {
      [key: string]: number
    }
    "taxonomy.Artist.slug": {
      [key: string]: number
    }
    "taxonomy.Author.name": {
      [key: string]: number
    }
    "taxonomy.Author.slug": {
      [key: string]: number
    }
    "taxonomy.Format.name": {
      Manga: number
      Manhua: number
      Manhwa: number
    }
    "taxonomy.Format.slug": {
      manga: number
      manhua: number
      manhwa: number
    }
    "taxonomy.Genre.name": {
      Action: number
      Adventure: number
      Drama: number
      Ecchi: number
      Fantasy: number
    }
    "taxonomy.Genre.slug": {
      action: number
      adventure: number
      drama: number
      ecchi: number
      fantasy: number
    }
    "taxonomy.Type.name": {
      Mirror: number
      Project: number
    }
    "taxonomy.Type.slug": {
      mirror: number
      project: number
    }
  }
  [key: string]: any;
}

export type ShinigamiSearchData = {
  retcode: number
  message: string
  meta: {
    request_id: string
    timestamp: number
    process_time: string
    page: number
    page_size: number
    total_page: number
    total_record: number
  }
  data: Array<{
    alternative_title: string
    bookmark_count: number
    country_id: string
    cover_image_url: string
    cover_portrait_url: string
    created_at: string
    deleted_at: any
    description: string
    is_recommended: boolean
    latest_chapter_id: string
    latest_chapter_number: number
    latest_chapter_time: string
    manga_id: string
    rank: number
    release_year: string
    status: number
    taxonomy: {
      Artist?: Array<{
        name: string
        slug: string
      }>
      Author: Array<{
        name: string
        slug: string
      }>
      Format: Array<{
        name: string
        slug: string
      }>
      Genre: Array<{
        name: string
        slug: string
      }>
      Type: Array<{
        name: string
        slug: string
      }>
    }
    title: string
    updated_at: string
    user_rate: number
    view_count: number
  }>
  facet: {
    release_year: {
      [key: string]: number
    }
    "taxonomy.Artist.name": {
      [key: string]: number
    }
    "taxonomy.Artist.slug": {
      [key: string]: number
    }
    "taxonomy.Author.name": {
      [key: string]: number
    }
    "taxonomy.Author.slug": {
      [key: string]: number
    }
    "taxonomy.Format.name": {
      Manhwa: number
    }
    "taxonomy.Format.slug": {
      manhwa: number
    }
    "taxonomy.Genre.name": {
      Action: number
      Adventure: number
      Drama: number
      Fantasy: number
      "Martial Arts": number
    }
    "taxonomy.Genre.slug": {
      action: number
      adventure: number
      drama: number
      fantasy: number
      "martial-arts": number
    }
    "taxonomy.Type.name": {
      Mirror: number
      Project: number
    }
    "taxonomy.Type.slug": {
      mirror: number
      project: number
    }
  }
  [key: string]: any;
}

export interface ShinigamiResponse {
	homepage: ShinigamiHomepageData
	search: ShinigamiSearchData
}
