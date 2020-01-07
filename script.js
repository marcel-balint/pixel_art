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
  black();
}

function black() {
  document.querySelectorAll(".content").forEach(
    content =>
      (content.onmouseover = () => {
        content.setAttribute("style", `background-color: #000`);
      })
  );
}

function white() {
  document.querySelectorAll(".content").forEach(
    content =>
      (content.onmouseover = () => {
        content.setAttribute("style", `background-color: #fff`);
      })
  );
}
