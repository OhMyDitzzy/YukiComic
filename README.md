<div align="center">
	<img src="./assets/yuki_comic_icon.png" alt="Icon"></img>
	<p>A Comic scraper library that is simple and Easy-To-Use</p>
	<img src="https://img.shields.io/github/stars/OhMyDitzzy/YukiComic" alt="Stars" />
	<img src="https://img.shields.io/github/forks/OhMyDitzzy/YukiComic" alt="Forks" />
	<img src="https://img.shields.io/github/license/OhMyDitzzy/YukiComic" alt="License" />
</div>

### NOTICE!!!
Join our <a href="https://whatsapp.com/channel/0029Vb7AafUL7UVRIpg1Fy24"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white" alt="WhatsApp"/></a> channel to stay up to date with the latest updates.

---

# YukiComic

YukiComic is a Comic Scraper library with many features and a wide range of supported comic servers. It uses Node.js built-in `fetch`, which means YukiComic is **lightweight** and doesn't require many third-party dependencies.

## Requirements
- **Node.js** v18 or higher (required for built-in `fetch` support)

## Installation

```bash
# npm
npm install yuki-comic

# yarn
yarn add yuki-comic

# pnpm
pnpm add yuki-comic
```

## Features

- [x] Supports multiple comic servers
- [x] Fully Typed (TypeScript support out of the box)
- [x] Flexible request options — customize requests to your favorite comic servers
- [x] Automatic parsing — just call the method and get the results!
- [ ] Batch download to any format (e.g. PDF or ZIP)

## Supported Servers

Here are some of the comic servers currently supported by YukiComic:

| Server | Status |
|--------|--------|
| Shinigami | ✅ Supported |
| ... | ... |

> More servers are being added! Feel free to open an issue or contribute.

## Simple Usage Example

```typescript
import { YukiComic } from "yuki-comic";

// Choose your favorite comic server!
const comic = YukiComic.server("shinigami", /* options */)

// Get homepage data
const homepage = await comic.getHomepage(/* options */)

console.log(homepage)
```

> [!WARNING]
> This is just an example. Methods may differ between servers. For more details, please check our [Wiki](https://github.com/OhMyDitzzy/YukiComic/wiki). You can also see an example of using the shinigami server in the [example](examples) folder.

## Contributing

Contributions are welcome! If you'd like to add support for a new server or improve the library, feel free to open a pull request or an issue.

This project is licensed under the terms specified in the [LICENSE](./LICENSE) file.
