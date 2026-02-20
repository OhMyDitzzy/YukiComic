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
		'taxonomy.Artist.name': {
			[key: string]: number
		}
		'taxonomy.Artist.slug': {
			[key: string]: number
		}
		'taxonomy.Author.name': {
			[key: string]: number
		}
		'taxonomy.Author.slug': {
			[key: string]: number
		}
		'taxonomy.Format.name': {
			Manga: number
			Manhua: number
			Manhwa: number
		}
		'taxonomy.Format.slug': {
			manga: number
			manhua: number
			manhwa: number
		}
		'taxonomy.Genre.name': {
			Action: number
			Adventure: number
			Drama: number
			Ecchi: number
			Fantasy: number
		}
		'taxonomy.Genre.slug': {
			action: number
			adventure: number
			drama: number
			ecchi: number
			fantasy: number
		}
		'taxonomy.Type.name': {
			Mirror: number
			Project: number
		}
		'taxonomy.Type.slug': {
			mirror: number
			project: number
		}
	}
	[key: string]: any
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
		'taxonomy.Artist.name': {
			[key: string]: number
		}
		'taxonomy.Artist.slug': {
			[key: string]: number
		}
		'taxonomy.Author.name': {
			[key: string]: number
		}
		'taxonomy.Author.slug': {
			[key: string]: number
		}
		'taxonomy.Format.name': {
			[key: string]: number
		}
		'taxonomy.Format.slug': {
			[key: string]: number
		}
		'taxonomy.Genre.name': {
			[key: string]: number
		}
		'taxonomy.Genre.slug': {
			[key: string]: number
		}
		'taxonomy.Type.name': {
			Mirror: number
			Project: number
		}
		'taxonomy.Type.slug': {
			mirror: number
			project: number
		}
	}
	[key: string]: any
}

export type ShinigamiDetailData = {
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
	data: {
		id: number
		manga_id: string
		title: string
		description: string
		alternative_title: string
		release_year: string
		status: number
		cover_image_url: string
		view_count: number
		user_rate: number
		cover_portrait_url: string
		latest_chapter_id: string
		latest_chapter_number: number
		latest_chapter_time: string
		country_id: string
		bookmark_count: number
		rank: number
		is_recommended: boolean
		taxonomy: {
			Artist: Array<{
				taxonomy_id: number
				slug: string
				name: string
			}>
			Author: Array<{
				taxonomy_id: number
				slug: string
				name: string
			}>
			Format: Array<{
				taxonomy_id: number
				slug: string
				name: string
			}>
			Genre: Array<{
				taxonomy_id: number
				slug: string
				name: string
			}>
			Type: Array<{
				taxonomy_id: number
				slug: string
				name: string
			}>
		}
	}
	chapter: Array<{
		chapter_id: string
		manga_id: string
		chapter_title: string
		chapter_number: number
		thumbnail_image_url: string
		view_count: number
		release_date: string
	}>
	created_at: string
	updated_at: string
	deleted_at: any
}

export type ShinigamiReadData = {
	retcode: number
	message: string
	meta: {
		request_id: string
		timestamp: number
		process_time: string
	}
	data: {
		chapter_id: string
		manga_id: string
		chapter_number: number
		chapter_title: string
		base_url: string
		base_url_low: string
		chapter: {
			path: string
			data: string[]
			images: Array<{
				index: number
				filename: string
				url: string
				url_low: string
			}>
		}
		thumbnail_image_url: string
		view_count: number
		prev_chapter_id: string
		prev_chapter_number: number
		next_chapter_id: string
		next_chapter_number: number
		release_date: string
		created_at: string
		updated_at: string
	}
}

export interface ShinigamiResponse {
	homepage: ShinigamiHomepageData
	search: ShinigamiSearchData
	detail: ShinigamiDetailData
	read: ShinigamiReadData
}
