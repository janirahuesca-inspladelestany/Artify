"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = exports.getImages = void 0;
const API_KEY = "35827533-8bc0f897be4bc0ef4ab3da9be";
const API_URL = "https://pixabay.com/api";
function getImages(searchParams, category, order, page) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/?key=${API_KEY}&${new URLSearchParams(searchParams)}&category=${category}&order=${order}&page=${page}`);
        const images = yield response.json();
        return images;
    });
}
exports.getImages = getImages;
function getVideos(searchParams, category, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/videos/?key=${API_KEY}&${new URLSearchParams(searchParams)}&category=${category}&order=${order}`);
        const videos = yield response.json();
        return videos;
    });
}
exports.getVideos = getVideos;
