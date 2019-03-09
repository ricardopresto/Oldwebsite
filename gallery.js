let fullpic = document.getElementById("fullpic");
let modal = document.getElementById("modal");
let wrapper = document.getElementById("wrapper");



wrapper.addEventListener('click', expand);
modal.addEventListener('click', hide);

function expand(event) {
    let clicked = event.srcElement;
    let image = clicked.getAttribute("src");
    let pic = document.createElement("img");
    pic.setAttribute("src", image);
    pic.setAttribute("height", "500");
    fullpic.appendChild(pic);
    //fullpic.style.backgroundImage = `url(${image})`;
    modal.style.display = "flex";
}

function hide() {
    let pic = fullpic.firstChild;
    fullpic.removeChild(pic);
    modal.style.display = "none";
}