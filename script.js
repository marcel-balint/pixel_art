let colors = document.querySelectorAll(".color");
let download = document.querySelector(".image-download");
let close = document.querySelector(".close");
let gridBtns = document.querySelector(".grid-size-btns");

createGrid();

function createGrid(val = 16) {
  let container = document.querySelector(".box");

  for (let i = 0; i < val * val; i++) {
    let square = document.createElement("div");
    square.classList.add("content");
    square.setAttribute("style", "background-color: #fff");
    container.appendChild(square);
    container.setAttribute(
      "style",
      `grid: repeat(${val}, auto) / repeat(${val}, auto)`
    );
  }
}

function paint(color) {
  document.querySelectorAll(".content").forEach(content => {
    content.onmouseover = () => {
      content.setAttribute("style", `background-color: ${color}`);
    };
  });
}

function addShadow() {
  let download = document.querySelector(".image-download");
  download.classList.add("shadow");
}

colors.forEach(element => {
  element.addEventListener("click", e => {
    if (e.target.className.includes("red")) {
      paint("#ff0000");
    } else if (e.target.className.includes("maroon")) {
      paint("#800000");
    } else if (e.target.className.includes("green")) {
      paint("#98fb98");
    } else if (e.target.className.includes("blue")) {
      paint("#0000ff");
    } else if (e.target.className.includes("yellow")) {
      paint("#ffff00");
    } else if (e.target.className.includes("orange")) {
      paint("#ffa500");
    } else if (e.target.className.includes("white")) {
      paint("#ffffff");
    } else if (e.target.className.includes("black")) {
      paint("#000000");
    } else if (e.target.className.includes("skin")) {
      paint("#ffe0bd");
    } else if (e.target.className.includes("pink")) {
      paint("#ffc0cb");
    } else if (e.target.className.includes("crimson")) {
      paint("#dc143c");
    } else if (e.target.className.includes("cyan")) {
      paint("#00ffff");
    }
  });
});

download.addEventListener("click", () => {
  let selector = document.getElementById("select");
  let value = selector[selector.selectedIndex].value;
  let show = document.querySelector(".img-format");
  let download = document.querySelector(".image-download");

  show.style.display = "block";
  if (value) {
    downloadImage(value);
    selector.selectedIndex = 0;
    download.classList.remove("shadow");
    show.style.display = "none";
  }
});

close.addEventListener("click", () => {
  let selector = document.getElementById("select");
  let show = document.querySelector(".img-format");
  let download = document.querySelector(".image-download");
  download.classList.remove("shadow");
  selector.selectedIndex = 0;
  show.style.display = "none";
});

gridBtns.addEventListener("click", e => {
  let container = document.querySelector(".box");
  if (e.target.dataset.value === "8") {
    container.innerHTML = "";
    createGrid(8);
  } else if (e.target.dataset.value === "12") {
    container.innerHTML = "";
    createGrid(12);
  } else if (e.target.dataset.value === "16") {
    container.innerHTML = "";
    createGrid(16);
  } else if (e.target.dataset.value === "32") {
    container.innerHTML = "";
    createGrid(32);
  }
});
