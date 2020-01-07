let colors = document.querySelectorAll(".color");

createGrid();

function createGrid(val = 16) {
  let container = document.querySelector(".box");

  for (let i = 0; i < val * val; i++) {
    let square = document.createElement("div");
    square.classList.add("content");
    square.setAttribute(
      "style",
      "background-color: #fff",
      "border: 1px solid #000"
    );
    container.appendChild(square);
    container.setAttribute(
      "style",
      `grid: repeat(${val}, auto) / repeat(${val}, auto)`
    );
  }
}

function paint(color) {
  document.querySelectorAll(".content").forEach(
    content =>
      (content.onmouseover = () => {
        content.setAttribute("style", `background-color: ${color}`);
      })
  );
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
