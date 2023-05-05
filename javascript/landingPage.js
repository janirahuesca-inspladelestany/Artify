"use strict";
var _a, _b;
//Generate the dot
const x = Math.floor(Math.random() * window.innerWidth);
const y = Math.floor(Math.random() * window.innerHeight);
const dot = document.createElement("div");
dot.classList.add("dot");
dot.style.left = x + "px";
dot.style.top = y + "px";
document.body.appendChild(dot);
(_a = document.querySelector(".dot")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    dot.style.transition = "2s";
    dot.style.transform = "scale(300)";
});
(_b = document.querySelector("span")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    const troll_text = document.querySelector("h3");
    if (troll_text === null) {
        return;
    }
    troll_text.style.color = "black";
    setTimeout(function () {
        // Código a ejecutar después de 1 segundo
        troll_text.style.color = "transparent";
    }, 5000);
});
