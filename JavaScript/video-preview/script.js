console.log("page loaded...");

const over = (element) => {
    element.muted = true;
    element.play();
}

const out = (element) => {
    element.pause();
    element.muted=false;
    element.currentTime = 0;
}