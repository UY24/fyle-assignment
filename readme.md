# GitHub Search Website

## Overview

This project is a GitHub search website that allows users to enter a GitHub username and view user details along with repositories. It features a clean and user-friendly interface with a responsive design.

## Features

- **Search Bar:** Users can input a GitHub username in the search bar.
- **User Details:** Upon entering a valid GitHub username, the website displays user details, including name, bio, location, and Twitter profile link.
- **Repository Display:** The website shows a grid of repositories with details such as repository name, description, language, and topics.
- **Pagination:** Repositories are paginated, allowing users to navigate through multiple pages.
- **Loader:** A loading spinner is displayed while fetching data from the GitHub API.

## Technologies Used

- HTML
- CSS
- JavaScript

## Styling

The styling is done using CSS to create an aesthetically pleasing and responsive layout. Different colors and styles are used to enhance the visual appeal.

## Code Structure

- **HTML:** The main structure of the website, including navigation, profile container, loader, repositories container, and pagination bar.
- **CSS:** Styling rules for various elements, ensuring a consistent and visually appealing design.
- **JavaScript (script.js):** The logic for fetching user data from the GitHub API, displaying user details and repositories, handling pagination, and updating the page dynamically.

## How to Run

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter a GitHub username in the search bar and click the "Search" button.
4. View user details, repositories, and navigate through pages using the pagination bar.

## Challenges and Solutions

### Challenge: Displaying User Details and Repositories

**Solution:** The JavaScript code fetches data from the GitHub API and dynamically updates the HTML content to display user details and repositories.

### Challenge: Pagination Implementation

**Solution:** The pagination bar allows users to change the number of repositories per page and navigate through different pages, enhancing the user experience.

### Challenge: Styling for Visual Appeal

**Solution:** CSS styles are applied to create a visually appealing design, including color schemes, grid layouts, and responsive elements.

### Challenge: Handling API Errors and Invalid Usernames

**Solution:** The code checks for API errors and invalid usernames, displaying appropriate messages to guide users.

Feel free to explore the code and customize it further based on your preferences or specific project requirements. Happy coding!
