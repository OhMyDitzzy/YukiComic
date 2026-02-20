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

	async getHomepage(format: Format = "all", page = 2, sort_by: SortBy = "default"): Promise<ShinigamiResponse["homepage"] | null> {
		try {
			const response = await this.fetchWithConfig(SHINIGAMI_CONFIG.baseUrl + SHINIGAMI_ROUTE.homepage + `/list?page=${page}&page_size=30&${sort_by === "default" ? "sort_order=desc" : `sort=${sort_by}`}&format=${format === "all" ? "manga,manhwa,manhua" : format}`)

			const json = await response.json();

			return json
		} catch (e) {
			throw new Error(`Failed while retrieving homepage data: ${e}`)
		}
	}
}
