//Generate the dot
const x = Math.floor(Math.random() * window.innerWidth);
const y = Math.floor(Math.random() * window.innerHeight);
const dot = document.createElement("div");
dot.classList.add("dot");
dot.style.left = x + "px";
dot.style.top = y + "px";
document.body.appendChild(dot);

document.querySelector(".dot").addEventListener("click", function() {
    dot.style.transition = "2s";
    dot.style.transform = "scale(300)";

    setTimeout(function() {
        window.location.href = "../search.html";
    }, 1000); 
});

document.querySelector("span").addEventListener("click", function() {
    const troll_text = document.querySelector("h3");
    if (troll_text === null) {
        return;
    }
    troll_text.style.color = "black";
    setTimeout(function() {
        // Código a ejecutar después de 1 segundo
        troll_text.style.color = "transparent";
    }, 5000); 
});