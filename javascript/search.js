import { getImages, getVideos } from "./getdata.js";

let searchParams = "dogs";
let currentPage = 1;
let maxPages;

const imagesContainer = document.querySelector(".images");
const videosContainer = document.querySelector(".videos");
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

    videosContainer.innerHTML = "";

    getVideos(searchParams, currentPage).then((videos) => {
        console.log(videos)
        maxPages = videos.totalPages
        updatePages();

        for (let video of videos.videos) {
            showVideo(video)
        }
    });
}

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change", function () {

    searchParams = searchInput.value;
    currentPage = 1;
    search()
})

const pages = document.querySelector(".pages > p")

const nextButton = document.querySelector(`button[title="next"]`)
nextButton.addEventListener("click", function () {
    if (currentPage < maxPages) currentPage++;
    updatePages();

    search()
})

const previousButton = document.querySelector(`button[title="previous"]`)
previousButton.addEventListener("click", function () {
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
    imageContainer.style.backgroundImage = `url(${image.webformatURL})`;

    imagesContainer.appendChild(imageContainer);
}


function showVideo(video) {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add("video");

    const source = video.webformatURL;
    const width = video.webformatWidth;
    const height = video.webformatHeight;

    videoContainer.innerHTML = `
      <video width="${width}" height="${height}" autoplay muted loop>
        <source src="${source}" type="video/mp4">
      </video>
    `;

    imagesContainer.appendChild(videoContainer);
}