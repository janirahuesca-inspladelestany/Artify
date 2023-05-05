//Generate the dot
const x: number = Math.floor(Math.random() * window.innerWidth);
const y: number = Math.floor(Math.random() * window.innerHeight);
const dot: HTMLElement = document.createElement("div");
dot.classList.add("dot");
dot.style.left = x + "px";
dot.style.top = y + "px";
document.body.appendChild(dot);

document.querySelector(".dot")?.addEventListener("click", function() {
    dot.style.transition = "2s";
    dot.style.transform = "scale(300)";
});

document.querySelector("span")?.addEventListener("click", function() {
    const troll_text: HTMLElement | null = document.querySelector("h3");
    if (troll_text === null) {
        return;
    }
    troll_text.style.color = "black";
    setTimeout(function() {
        // Código a ejecutar después de 1 segundo
        troll_text.style.color = "transparent";
    }, 5000); 
});