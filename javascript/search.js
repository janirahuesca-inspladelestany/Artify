import { getImages, getVideos } from "./getdata.js";

let searchParams = "dogs";
let currentPage = 1;
let maxPages;

let imagesContainer = document.querySelector(".images");
let videosContainer = document.querySelector(".videos");

const mediaSelectorType = document.querySelector(`select[title="type"]`);
const contentContainer = document.querySelector(".contentContainer");

const pages = document.querySelector(".pages > p");

search();

function search() {
  if (mediaSelectorType.value == "images") {
    //Eliminar el videosContainer
    if (videosContainer != null) videosContainer.remove();

    //Crear el imagesContainer
    if (imagesContainer == null) {
      const imagesContainerSection = document.createElement("section");
      imagesContainerSection.classList.add("images");
      contentContainer.appendChild(imagesContainerSection);
    }

    //Borrar les imatges que hi ha al imagesContainer
    removeImages();

    //Agafar les imatges de la API
    getImages(searchParams, currentPage).then((images) => {
      console.log(images);
      maxPages = images.totalPages;
      updatePages();

      //Posar les imatges al imagesContainer
      for (let image of images.images) {
        showImage(image);
      }
    });
  }

  if (mediaSelectorType.value == "videos") {
    //Eliminar el imagesContainer
    if (imagesContainer != null) imagesContainer.remove();

    //Crear el videosContainer
    if (videosContainer == null) {
      const videosContainerSection = document.createElement("section");
      videosContainerSection.classList.add("videos");
      contentContainer.appendChild(videosContainerSection);
    }

    //Borrar les videos que hi ha al videosContainer
    removeVideos();

    //Agafar els videos de la API
    getVideos(searchParams, currentPage).then((videos) => {
      console.log(videos);
      maxPages = videos.totalPages;
      updatePages();

      for (let video of videos.videos) {
        showVideo(video);
      }
    });
  }
}

function removeImages() {
  imagesContainer = document.querySelector(".images");

  for (let i = imagesContainer.childNodes.length - 1; i >= 0; i--) {
    imagesContainer.removeChild(imagesContainer.childNodes[i]);
  }
}

function removeVideos() {
  videosContainer = document.querySelector(".videos");

  for (let i = videosContainer.childNodes.length - 1; i >= 0; i--) {
    videosContainer.removeChild(videosContainer.childNodes[i]);
  }
}

mediaSelectorType.addEventListener("change", function () {
  currentPage = 1;
  updatePages();
  search();
});

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change", function () {
  searchParams = searchInput.value;
  currentPage = 1;
  updatePages();
  search();
});

const nextButton = document.querySelector(`button[title="next"]`);
nextButton.addEventListener("click", function () {
  if (currentPage < maxPages) {
    currentPage++;
    updatePages();
    search();
  }
});

const previousButton = document.querySelector(`button[title="previous"]`);
previousButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    updatePages();
    search();
  }
});

function updatePages() {
  if (maxPages >= 1) pages.textContent = `${currentPage} - ${maxPages}`;
  else pages.textContent = `0 - 0`;
}

function showImage(image) {
  imagesContainer = document.querySelector(".images");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");
  imageContainer.style.backgroundImage = `url(${image.webformatURL})`;

  const imageDownloads = document.createElement("div");
  imageDownloads.classList.add("imageDownloads");
  imageDownloads.textContent = `${image.downloads}`;

  imageContainer.appendChild(imageDownloads);
  imagesContainer.appendChild(imageContainer);
}

function showVideo(video) {
  videosContainer = document.querySelector(".videos");

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video");

  const source = video.videos.tiny.url;

  videoContainer.innerHTML = `
      <video autoplay muted loop>
        <source src="${source}" type="video/mp4">
        </video>
    `;

  videosContainer.appendChild(videoContainer);
}
