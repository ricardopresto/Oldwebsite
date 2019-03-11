let fullpic = document.getElementById("fullpic");
let modal = document.getElementById("modal");
let wrapper = document.getElementById("wrapper");
let thumbs = document.getElementsByClassName("thumb");

wrapper.addEventListener("click", expand);
modal.addEventListener("click", hide);

for (i = 0; i < thumbs.length; i++) {
  if (thumbs[i].clientHeight > thumbs[i].clientWidth) {
    thumbs[i].style.height = "300px";
  }
}

function expand(event) {
  let clicked = event.srcElement;
  if (clicked !== wrapper) {
    let image = clicked.getAttribute("src");
    let pic = document.createElement("img");
    pic.setAttribute("src", image);
    pic.setAttribute("height", "500");
    fullpic.appendChild(pic);
    modal.style.display = "flex";
  }
}

function hide() {
  let pic = fullpic.firstChild;
  fullpic.removeChild(pic);
  modal.style.display = "none";
}
