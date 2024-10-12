document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });

  
  
    // Fetch the contributor list JSON file
    fetch('./Contributor_list.json')
      .then(response => response.json())
      .then(data => {
        const contributorGrid = document.getElementById('contributor-grid');
  
        // Loop through each contributor in the JSON and create HTML
        data.forEach(contributor => {
          const contributorElement = document.createElement('div');
          contributorElement.className = 'contributor';
  
          // Retrieving GitHub URL
          const githubUrl = contributor.github_url;
          
          // Extract the username from the URL using regular expression
          const username = githubUrl.match(/https:\/\/github\.com\/([^\/]+)/)[1];
  
          if (username) {
            // Fetch user data from GitHub API
            fetch(`https://api.github.com/users/${username}`)
              .then(response => response.json())
              .then(data => {
                // Check if a valid user is found
                if (data && data.avatar_url) {
                  // Display the avatar
                  const avatar_img = data.avatar_url;
  
                  contributorElement.innerHTML = `
                    <img src="${avatar_img}" alt="Contributor Avatar">
                    <a href="${contributor.github_url}" target="_blank">${contributor.name}</a>
                    <br>
                    <p>${contributor.action}</p>
                  `;
                } else {
                  console.log("User not found!");
                }
              })
              .catch(error => {
                console.error(error);
              });
          } else {
            console.log("Invalid GitHub URL!");
          }
  
          // Append the new contributor to the grid
          contributorGrid.appendChild(contributorElement);
        });
      });
  
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
});
  