let fullpic = document.getElementById("fullpic");
let modal = document.getElementById("modal");
let wrapper = document.getElementById("wrapper");
let thumbs = document.getElementsByClassName("thumb");
let left = document.getElementById("left");
let right = document.getElementById("right");

wrapper.addEventListener("click", expand);
modal.addEventListener("click", hide);
left.addEventListener("click", leftClick);
right.addEventListener("click", rightClick);

let currentImage = "";
thumbs = Array.from(thumbs);
let fullPicDisplay = false;

for (i = 0; i < thumbs.length; i++) {
  if (thumbs[i].clientHeight > thumbs[i].clientWidth) {
    thumbs[i].style.height = "300px";
  }
}

function expand(event) {
  let clicked = event.srcElement;
  if (clicked !== wrapper) {
    fullPicDisplay = true;
    currentImage = String(clicked.id).slice(-1);
    currentImage = Number(currentImage);
    let image = clicked.getAttribute("src");
    let pic = document.createElement("img");
    pic.setAttribute("src", image);
    pic.setAttribute("height", "500");
    fullpic.appendChild(pic);
    modal.style.display = "flex";
  }
}

function leftClick() {
  if (currentImage > 0) {
    currentImage = currentImage - 1;
    fullpic.removeChild(fullpic.firstChild);
    let image = thumbs[Number(currentImage)];
    image = image.getAttribute("src");
    let pic = document.createElement("img");
    pic.setAttribute("src", image);
    pic.setAttribute("height", "500");
    fullpic.appendChild(pic);
  }
}

function rightClick() {
  if (currentImage < thumbs.length - 1) {
    currentImage = currentImage + 1;
    fullpic.removeChild(fullpic.firstChild);
    let image = thumbs[Number(currentImage)].getAttribute("src");
    let pic = document.createElement("img");
    pic.setAttribute("src", image);
    pic.setAttribute("height", "500");
    fullpic.appendChild(pic);
  }
}

function hide(event) {
  let clicked = event.srcElement;
  if (clicked == modal) {
    fullpic.removeChild(fullpic.firstChild);
    fullPicDisplay = false;
    modal.style.display = "none";
  }
}

document.addEventListener("keydown", keyPress);

function keyPress(event) {
  if (fullPicDisplay == true) {
    if (event.key == "ArrowRight") {
      rightClick();
    }
    if (event.key == "ArrowLeft") {
      leftClick();
    }
    if (event.key == "Escape") {
      fullpic.removeChild(fullpic.firstChild);
      fullPicDisplay = false;
      modal.style.display = "none";
    }
  }
}
