import type { BaseConfig } from "../../Types"

export const SHINIGAMI_CONFIG: BaseConfig = {
	baseUrl: "https://api.shngm.io",
	headers: {
		"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36",
		"Connection": "Keep-Alive",
		"Accept": "application/json",
		"Accept-Encoding": "json",
		"DNT": "1",
		"Origin": "https://09.shinigami.asia",
		"Sec-GPC": "1",
		"Cache-Control": "max-age=600"
	},
	timeout: 60000,
} as const

export const SHINIGAMI_ROUTE = {
	homepage: `/v1/manga`,
} as const
