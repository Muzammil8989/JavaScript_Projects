const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector("button"),
  authorText = document.querySelector(".author-area .name"),
  twitterBtn = document.querySelector(".buttons .twitter"),
  soundBtn = document.querySelector(".buttons .sound"),
  copyBtn = document.querySelector(".buttons .copy");
  const copyPopup = document.getElementById("copyPopup");




function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random").then((res) => {
    return res.json();
  }).then((data) => {
    quoteText.innerText = data.content;
    authorText.innerText = data.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");

    
  })
}
soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(quoteText.innerText + " - " + authorText.innerText);
  speechSynthesis.speak(utterance);
  
})
function showCopiedPopup() {
  copyPopup.classList.add("show");
  setTimeout(() => {
    copyPopup.classList.remove("show");
  }, 2000); // Hide after 2 seconds
}
copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(quoteText.innerText)
    .then(() => {
      showCopiedPopup();
    })
    .catch((err) => {
      console.error("Error copying to clipboard:", err);
    });
});

twitterBtn.addEventListener("click", () => {
  let twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, "_blank");
  
})

quoteBtn.addEventListener("click", randomQuote);
