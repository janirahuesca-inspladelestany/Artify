"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getdata_1 = require("./getdata");
(0, getdata_1.getImages)({ q: 'red roses' }, 'nature', 'latest', 543).then((images) => {
    console.log(images);
});
(0, getdata_1.getVideos)({ q: 'red roses' }, 'nature', 'latest').then((videos) => {
    console.log(videos);
});
