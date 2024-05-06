const API_URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const resp = await fetch(API_URL + username);
    if (!resp.ok) {
      throw new Error("User not found");
    }
    const respData = await resp.json();
    createUserCard(respData);
    getRepos(username);
  } catch (error) {
    console.error(error.message);
  }
}

async function getRepos(username) {
  try {
    const resp = await fetch(API_URL + username + "/repos");
    if (!resp.ok) {
      throw new Error("User repositories not found");
    }
    const respData = await resp.json();
    addReposToCard(respData);
  } catch (error) {
    console.error(error.message);
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id="repos">
            </div>
        </div>
    </div>`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElement = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;
    reposElement.appendChild(repoElement);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
