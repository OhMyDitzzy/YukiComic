import { ShinigamiServer } from './Server/shinigami'
import type { BaseConfig } from './Types'

interface ServerMap {
	shinigami: ShinigamiServer
}

class YukiComic {
	public static server<T extends keyof ServerMap>(serverType: T, config?: BaseConfig): ServerMap[T] {
		switch (serverType) {
			case 'shinigami':
				return new ShinigamiServer(config) as ServerMap[T]
			default:
				throw new TypeError(`Server type ${serverType} not supported`)
		}
	}
}

export { YukiComic }
export default YukiComic
