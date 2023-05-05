import { getImages, getVideos } from "./getdata";

getImages({ q: 'red roses' }, 'nature', 'latest', 543).then((images: any) => {
    console.log(images)
});

getVideos({ q: 'red roses' }, 'nature', 'latest').then((videos: any) => {
    console.log(videos)
})
