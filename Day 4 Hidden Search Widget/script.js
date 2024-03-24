const searchBtn = document.querySelector(".search");
const searchInput = document.querySelector(".search-btn");
const input = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("active");
    input.focus();

   
    });
    


