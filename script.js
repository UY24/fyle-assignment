let username = null;
let currentPage = 1;
let reposPerPage = 10;
let totalRepos = 0;

function fetchGitHubData(username, page, perPage) {
  showLoader();

  // Fetch user data
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      hideLoader();
      const profileContainer = document.getElementById("profile-container");
      const reposContainer = document.getElementById("repos-container");
      const paginationBar = document.querySelector(".pagination-bar");

      // Clear previous content
      profileContainer.innerHTML = "";
      reposContainer.innerHTML = "";
      paginationBar.style.display = "none"; // Hide pagination initially

      if (data.name == null) {
        profileContainer.innerHTML = `
                    <div class="container flex user-error">
                        <h1>Please Enter a GitHub Username to Search</h1>
                    </div>`;
      } else {
        // Display user profile
        profileContainer.innerHTML += `
                    <div class="container flex main-content">
                        <div class="profile-pic">
                            <img src="${data.avatar_url}" alt="Profile Picture" width="100">
                            <p>🔗: <a href="https://github.com/${data.login}?tab=repositories" target="_blank">https://github.com/${data.login}?tab=repositories</a> </p>
                        </div>
                        <div class="profile-data">
                            <h1>Name: ${data.name}</h1>
                            <p>Bio: ${data.bio}</p>
                            <p>📍: ${data.location}</p>
                            <p>Twitter: <a href="https://twitter.com/${data.twitter_username}" target="_blank">https://twitter.com/${data.twitter_username}</a></p>
                        </div>
                    </div>
                    `;

        fetch(
          `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`
        )
          .then((response) => response.json())
          .then((repos) => {
            // Display user repositories
            reposContainer.innerHTML = "";
            repos.forEach((repo) => {
              reposContainer.innerHTML += `
                                <div class="repo">
                                    <h3>${repo.name}</h3>
                                    <p>${repo.description}</p>
                                    <p>Language: ${repo.language}</p>
                                    <p>Stars: ${repo.stargazers_count}</p>
                                    <p>Forks: ${repo.forks_count}</p>
                                </div>`;
            });

            // Display pagination bar
            paginationBar.style.display = "flex";
          })
          .catch((error) =>
            console.error("Error fetching repositories:", error)
          );
      }
    })
    .catch((error) => {
      hideLoader();
      console.error("Error fetching user data:", error);
    });
}

function searchGitHub() {
  const searchText = document.getElementById("search-text").value;

  // Update the GitHub username in the existing script
  username = searchText;

  // Reset pagination to page 1 when searching
  currentPage = 1;

  // Fetch GitHub data with pagination
  fetchGitHubData(username, currentPage, reposPerPage);
}

// Initial fetch
fetchGitHubData(username, currentPage, reposPerPage);

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

function changePage(change) {
  currentPage += change;
  if (currentPage < 1) {
    currentPage = 1;
  }
  updatePageNumber();
  fetchGitHubData(username, currentPage, reposPerPage);
}

function changeReposPerPage() {
  reposPerPage = parseInt(document.getElementById("repos-per-page").value);
  currentPage = 1;
  updatePageNumber();
  fetchGitHubData(username, currentPage, reposPerPage);
}

function updatePageNumber() {
  document.getElementById("page-number").innerText = currentPage;
}
