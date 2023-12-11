let likes = 0;
let dislikes = 0;
function likeClick() {
  likes++;
  updateLikes();
}

function unlikeClick() {
  if (likes > 0) {
    likes--;
    updateLikes();
  }
}

function dislikeClick() {
  dislikes++;
  updateDislikes();
}

function undislikeClick() {
  if (dislikes > 0) {
    dislikes--;
    updateDislikes();
  }
}

function updateLikes() {
  const likesCountElement = document.getElementById("likes-count");
  likesCountElement.innerHTML = likes;
}

function updateDislikes() {
  const dislikesCountElement = document.getElementById("dislikes-count");
  dislikesCountElement.innerHTML = dislikes;
}
