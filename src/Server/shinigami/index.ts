import { type ShinigamiResponse } from "../../Types/shinigami";
import { SHINIGAMI_CONFIG, SHINIGAMI_ROUTE } from "../../Constants/shinigami";
import { BaseServer } from "../baseServer";

type SortBy =
	"popularity"
	| "rating"
	| "latest"
	| "default"

type Format =
	"manga"
	| "manhwa"
	| "manhua"
	| "all"

export class ShinigamiServer extends BaseServer {
	constructor(config?: Partial<typeof SHINIGAMI_CONFIG>) {
		super({
			baseUrl: SHINIGAMI_CONFIG.baseUrl,
			headers: SHINIGAMI_CONFIG.headers,
			...config
		})
	}

	/**
		* Request homepage data from Shinigami. You can also organize it by page, format, or even sort_by property.
		*/
	async getHomepage(format: Format = "all", page = 2, sort_by: SortBy = "default"): Promise<ShinigamiResponse["homepage"]> {
		try {
			const response = await this.fetchWithConfig(SHINIGAMI_CONFIG.baseUrl + SHINIGAMI_ROUTE.homepage + `/list?page=${page}&page_size=30&${sort_by === "default" ? "sort_order=desc" : `sort=${sort_by}`}&format=${format === "all" ? "manga,manhwa,manhua" : format}`)

			const json = await response.json();

			return json
		} catch (e) {
			throw new Error(`Failed while retrieving homepage data: ${e}`)
		}
	}

	/**
		* Find your favorite comics
		*/
	async search(q: string, page = 1, sort_by: SortBy = "default"): Promise<ShinigamiResponse["search"]> {
		try {
			const response = await this.fetchWithConfig(SHINIGAMI_CONFIG.baseUrl + SHINIGAMI_ROUTE.search + `/list?page=${page}&q=${q}&page_size=30&${sort_by === "default" ? `sort_order=desc` : `sort=${sort_by}&sort_order=desc`}`)

			const json = await response.json()

			return json;
		} catch (e) {
			throw new Error(`Failed while retrieving search data: ${e}`)
		}
	}
}
