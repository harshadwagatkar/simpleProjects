const container = document.querySelector(".container");
const icon = document.querySelector("i");


let like = () => {
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    icon.style.opacity = 0.8;
    setTimeout(() => {
        icon.style.transform = "translate(-50%, -50%) scale(0)";
        icon.style.opacity = 0;
    }, 1000);
}

container.addEventListener('dblclick', like);