const accessKey = "cKr4nBdE0T27qoEq2jrbaezgV2UtPpY53gCvIPRTJvE";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

// Access key --> cKr4nBdE0T27qoEq2jrbaezgV2UtPpY53gCvIPRTJvE

let keyword = "";
let page = 1;

const searchImages =  async () => {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const {results} = await response.json();

    (page === 1) && (searchResult.innerHTML = "");
    
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        // imageLink.setAttribute('download','');
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})