async function displayPages() {
    let listPages = await axios('http://localhost:3000/pages')
    listPages = listPages.data
    console.log(listPages);
    let str = ''
    for (const page of listPages) {
        str += renderPage(page)
    }
    $("ul#pages").html(str)
}
displayPages()
function renderPage(el) {
    return `
    <li class="active"><a href="${el.link}" title="">${el.name}</a></li>`
}
displayPages()

async function displayDirectories() {
    let listDirectories = await axios('http://localhost:3000/categories')
    listDirectories = listDirectories.data
    console.log(listDirectories);
    let str = ''
    for (const directory of listDirectories) {
        str += renderDirectory(directory)
    }
    $("ul#newsDirectory").html(str)
}
displayDirectories()
function renderDirectory(el) {
    return `<li>
    <a href="danhmuc.html?cid=${el.id}">${el.name}</a>
    </li>`
}

async function displayContent() {
    let mainContents = await axios("http://localhost:3000/maincontent")
    mainContents = mainContents.data

    function render(el) {
        return `<p>
        ${el.content}</p>`
    }
    let str = ''
    function display() {

        for (const el of mainContents) {
            str += render(el)
        }
    }
    display()
    $("div.main-content").html(str)
}
displayContent()