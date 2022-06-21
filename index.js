
function setScale() {
    const renderWidth = 640;
    const renderHeight = 480;
    const desiredRatio = renderWidth/renderHeight;
    const aspectRatio = window.innerWidth/window.innerHeight;

    console.log(desiredRatio,aspectRatio );

    let scale = 1;
    if (desiredRatio < aspectRatio) {
        scale = window.innerHeight/renderHeight;
    } else if (desiredRatio > aspectRatio) {
        scale = window.innerWidth/renderWidth;
    } else {
        scale = aspectRatio/desiredRatio;
    }

    document.documentElement.style.setProperty('--screen-scale', `${scale}`);
}


window.addEventListener('resize', setScale);

setScale();

function randomizeArt() {
    document.querySelector(".artimage").src = `art${Math.floor(Math.random()*6 + 1)}.jpeg`
}

randomizeArt();
