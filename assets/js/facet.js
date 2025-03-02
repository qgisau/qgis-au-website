function filterPostsByHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1)); // Decode hash for spaces/special characters

  // Get all posts
  const posts = document.querySelectorAll('#posts-container .post');

  if (hash) {
    posts.forEach(post => {
      const postTags = post.getAttribute('data-tags').split(',').map(tag => tag.trim()); // Trim spaces
      post.style.display = postTags.includes(hash) ? 'block' : 'none';
    });
  } else {
    // If no hash, show all posts
    posts.forEach(post => {
      post.style.display = 'block';
    });
  }

  // Highlight selected tag in the menu
  highlightActiveTag(hash);
}

// Function to highlight the selected tag
function highlightActiveTag(selectedTag) {
  const tagLinks = document.querySelectorAll("#facet-menu a");

  tagLinks.forEach(link => {
    link.classList.remove("active"); // Remove active class from all links

    const linkTag = decodeURIComponent(link.getAttribute("href").slice(1)); // Extract hash part
    if (linkTag === selectedTag) {
      link.classList.add("active"); // Add active class to the selected tag
    }
  });
}

// Apply filter & highlight on page load based on initial hash
document.addEventListener('DOMContentLoaded', filterPostsByHash);

// Apply filter & highlight when hash changes
window.addEventListener('hashchange', filterPostsByHash);
