import { getImages, getVideos } from "./getdata.js";

let searchParams = "dogs";
let currentPage = 1;
let maxPages;

const imagesContainer = document.querySelector(".images");
search()

function search() {
    imagesContainer.innerHTML = "";

    getImages(searchParams, currentPage).then((images) => {
        console.log(images)
        maxPages = images.totalPages
        updatePages();

        for (let image of images.images) {
            showImage(image)
        }
    });
}

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change", function() {

    searchParams = searchInput.value;
    currentPage = 1;
    search()
})

const pages = document.querySelector(".pages > p")

const nextButton = document.querySelector(`button[title="next"]`)
nextButton.addEventListener("click", function() {
    if (currentPage < maxPages) currentPage++;
    updatePages();

    search()
})

const previousButton = document.querySelector(`button[title="previous"]`)
previousButton.addEventListener("click", function() {
    if (currentPage > 1) currentPage--;
    updatePages();

    search()
})

function updatePages() {
    if (maxPages >= 1) pages.textContent = `${currentPage} - ${maxPages}`;
    else pages.textContent = `0 - 0`;
}


function showImage(image) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add("image");
    imageContainer.style.backgroundImage = `url(${image.previewURL})`;

    imagesContainer.appendChild(imageContainer);
}