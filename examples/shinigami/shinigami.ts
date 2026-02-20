import YukiComic from "../../src"

const comic = YukiComic.server("shinigami")

const homepage = await comic.getHomepage()
console.log(homepage)

const search = await comic.search("Solo Leveling")
console.log(search)
