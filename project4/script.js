const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    const img = box.childNodes[3]; 
    // console.log(img);
    box.addEventListener('mouseenter', () => {
        box.addEventListener('mousemove', (e) => {
            img.style.transform = "scale(1)";
            img.style.left = `${e.x}px`;
        })

        box.addEventListener('mouseleave', () => {
            img.style.transform = "scale(0)";
        })
    })

})