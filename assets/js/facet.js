function filterPostsByHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1)); // Decode hash to handle spaces and special characters

  // Get all posts
  const posts = document.querySelectorAll('#posts-container .post');

  if (hash) {
    posts.forEach(post => {
      const postTags = post.getAttribute('data-tags').split(','); // Split by commas
      post.style.display = postTags.includes(hash) ? 'block' : 'none';
    });
  } else {
    // If no hash, show all posts
    posts.forEach(post => {
      post.style.display = 'block';
    });
  }
}

// Apply filter on page load based on initial hash
document.addEventListener('DOMContentLoaded', filterPostsByHash);

// Apply filter when hash changes (e.g., user clicks a different tag link)
window.addEventListener('hashchange', filterPostsByHash);
