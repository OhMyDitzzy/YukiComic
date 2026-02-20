import YukiComic from "../../src"

const comic = YukiComic.server("shinigami")

// Take the homepage, each item has a manga_id
const homepage = await comic.getHomepage()
const firstMangaFromHomepage = homepage.data[0]
console.log("Homepage manga_id:", firstMangaFromHomepage.manga_id)

// Search for manga, just like the homepage, each item has a manga_id
const search = await comic.search("Solo Leveling")
const firstMangaFromSearch = search.data[0]
console.log("Search manga_id:", firstMangaFromSearch.manga_id)

// Get manga details using manga_id from search results/homepage
//    detail.chapter contains a list of chapters, each item has a chapter_id
const detail = await comic.getDetail(firstMangaFromSearch.manga_id)
const firstChapter = detail.chapter[0]
const lastChapter = detail.chapter[detail.chapter.length - 1]
console.log("First chapter_id:", firstChapter.chapter_id, "| Chapter:", firstChapter.chapter_number)
console.log("Last chapter_id:", lastChapter.chapter_id, "| Chapter:", lastChapter.chapter_number)

// Read chapter using chapter_id from details
const read = await comic.readChapter(lastChapter.chapter_id)
console.log("Total images:", read.data.chapter.images.length)
console.log("First image URL:", read.data.chapter.images[0].url)
console.log(JSON.stringify(read, null, 2))