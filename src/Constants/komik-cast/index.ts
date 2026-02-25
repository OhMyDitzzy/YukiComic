import type { BaseConfig } from "../../Types";

export const KOMIK_CAST_CONFIG: BaseConfig = {
	baseUrl: "https://be.komikcast.fit",
	headers: {
		":method": "GET",
		":authority": "be.komikcast.fit",
		":path": "/series?includeMeta=true&sort=popularity&sortOrder=desc&take=12&page=2",
		":scheme": "https",
		"user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36",
		"referer": "https://v1.komikcast.fit/",
		"origin": "https://v1.komikcast.fit",
		"accept": "application/json",
		"accept-language": "en-US,en;q=0.9,id;q=0.8",
		"cache-control": "max-age=600",
		"accept-encoding": "json"
	},
	timeout: 60000
} as const
