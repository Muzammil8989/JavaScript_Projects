const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

const sizeElement = document.getElementById("size");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const colorInput = document.getElementById("color");
const clearButton = document.getElementById("clear");

decreaseButton.addEventListener("click", () => {
  size = size - 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});
increaseButton.addEventListener("click", () => {
  size = size + 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});
colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
  sizeElement.innerText = size;
  drawCircle(x, y);
  drawLine(x, y, x, y); 
}
