const crs = document.querySelector('.cursor');


window.addEventListener('mousemove', (e) => {
    // console.log(e);
    // console.log(e.x);
    // console.log(e.y);

    crs.style.top = `${e.y}px`; 
    crs.style.left = `${e.x}px`; 
});
