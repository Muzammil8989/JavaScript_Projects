const content = document.querySelectorAll(".content");
const listItem = document.querySelectorAll("nav ul li");

listItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideAllContent();
    hideAllList();

    content[index].classList.add("show");

    listItem[index].classList.add("active");
  });

});

function hideAllContent() {
  content.forEach((item) => {
    item.classList.remove("show");
  });
}

function hideAllList() {
  listItem.forEach((item) => {
    item.classList.remove("active");
  });
}
