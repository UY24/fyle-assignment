let username = "johnpapa";

function fetchGitHubData(username) {
  // Fetch user data
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const profileContainer = document.getElementById("profile-container");
      const enterUsernameMessage = document.getElementById(
        "enter-username-message"
      );

      // Clear previous content
      profileContainer.innerHTML = "";
      enterUsernameMessage.style.display = "none"; // Hide the message

      if (data.name == null) {
        profileContainer.innerHTML += `
                <div class="container">
                    <h1>Please Enter Valid Username...</h1>
                </div>`;
      } else {
        // Display user profile
        profileContainer.innerHTML += `
                    <div class="container flex main-content">
                        <div class="profile-pic">
                            <img src="${
                              data.avatar_url
                            }" alt="Profile Picture" width="100">
                            <p>🔗:<a href="https://github.com/${
                              data.login
                            }?tab=repositories" target="_blank">https://github.com/${
          data.login
        }?tab=repositories</a> </p>
                        </div>
                        <div class="profile-data">
                            <h1>${data.name}</h1>
                            <p>${data.bio}</p>
                            <p>📍: ${data.location}</p>
                            ${
                              data.twitter_username
                                ? `<p>Twitter: <a href="https://twitter.com/${data.twitter_username}" target="_blank">https://twitter.com/${data.twitter_username}</a></p>`
                                : `<p>Twitter: N/A</p>`
                            }
                        </div>
                    </div>`;

        
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);

      // Display the message again if an error occurs
      const enterUsernameMessage = document.getElementById(
        "enter-username-message"
      );
      enterUsernameMessage.style.display = "block";
    });
}

function searchGitHub() {
  const searchText = document.getElementById("search-text").value;

  // Check if a username is provided
  if (searchText.trim() === "") {
    const enterUsernameMessage = document.getElementById(
      "enter-username-message"
    );
    enterUsernameMessage.style.display = "block"; // Display the message
  } else {
    // Hide the message if a username is provided
    const enterUsernameMessage = document.getElementById(
      "enter-username-message"
    );
    enterUsernameMessage.style.display = "none";
    // Update the GitHub username in the existing script
    username = searchText;
    fetchGitHubData(username);
  }
}
