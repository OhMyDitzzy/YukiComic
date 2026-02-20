import type { BaseConfig } from '../Types'

export class BaseServer {
	protected config: BaseConfig

	constructor(config?: BaseConfig) {
		this.config = {
			baseUrl: '',
			timeout: 60000,
			...config
		}
	}

	protected async fetchWithConfig(url: string, options: RequestInit = {}): Promise<Response> {
		const headers = {
			...this.config.headers,
			...options.headers
		}

		return fetch(encodeURI(url), {
			...options,
			headers,
			signal: AbortSignal.timeout(this.config.timeout || 60000)
		})
	}
}
