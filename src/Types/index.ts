import type { ShinigamiResponse } from './shinigami'

export interface BaseConfig {
	baseUrl: string
	headers?: Record<string, string>
	timeout?: number
	[key: string]: any
}

export interface ServerResponseMap {
	shinigami: ShinigamiResponse
}
