// Get references to the HTML elements with the IDs 'tags' and 'textarea'
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// Set focus on the textarea element
textarea.focus();

// Add an event listener to the textarea for the 'keyup' event
textarea.addEventListener("keyup", (e) => {
  // Call the createTags function passing the input value
  createTags(e.target.value);

  // If the 'Enter' key is pressed, clear the textarea after a short delay and call the randomSelect function
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

// Function to create tags from the input value
function createTags(input) {
  // Split the input into an array of tags, trim whitespace, and filter out empty tags
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // Clear the existing tags in the tags container
  tagsEl.innerHTML = "";

  // Create and append span elements for each tag to the tags container
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

// Function to randomly select and highlight tags
function randomSelect() {
  // Number of times to highlight and unhighlight tags
  const times = 30;

  // Set an interval to repeatedly highlight and unhighlight tags
  const interval = setInterval(() => {
    // Pick a random tag, highlight it, and unhighlight it after a short delay
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // After a set number of times, clear the interval and highlight a random tag
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// Function to pick a random tag from the tags container
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

// Function to highlight a tag by adding a CSS class
function highlightTag(tag) {
  tag.classList.add("highlight");
}

// Function to unhighlight a tag by removing a CSS class
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
