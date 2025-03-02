function filterPostsByHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1)); // Decode hash for spaces/special characters

  // Get all posts
  const posts = document.querySelectorAll("#posts-container .post");

  if (hash) {
    posts.forEach((post) => {
      const postTags = post.getAttribute("data-tags").split(",").map(tag => tag.trim()); // Trim spaces
      post.style.display = postTags.includes(hash) ? "block" : "none";
    });
  } else {
    // If no hash, show all posts
    posts.forEach((post) => {
      post.style.display = "block";
    });
  }

  // Highlight selected tag in the menu
  highlightActiveTag(hash);
}

// Function to highlight the selected tag in the facets menu & nav menu
function highlightActiveTag(selectedTag) {
  const tagLinks = document.querySelectorAll("#facet-menu a");
  const menuLinks = document.querySelectorAll(".site-nav .page-link");

  // Remove active class from all tag links
  tagLinks.forEach((link) => {
    link.classList.remove("active");
    const linkTag = decodeURIComponent(link.getAttribute("href").slice(1)); // Extract hash part
    if (linkTag === selectedTag) {
      link.classList.add("active");
    }
  });

  // Remove active class from all nav menu links
  menuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // If the selected tag is "Events", make sure the Events menu item is active
  if (selectedTag === "Events") {
    const eventsMenuLink = document.querySelector(".site-nav .page-link[href='/posts/#Events']");
    if (eventsMenuLink) {
      eventsMenuLink.classList.add("active");
    }
  } else {
    // If another tag is selected (or no tag at all), keep "Posts" active
    const defaultActive = document.querySelector(".site-nav .page-link[href='/posts/']");
    if (defaultActive) {
      defaultActive.classList.add("active");
    }
  }
}

// Apply filter & highlight on page load based on initial hash
document.addEventListener("DOMContentLoaded", () => {
  filterPostsByHash();
});

// Apply filter & highlight when hash changes
window.addEventListener("hashchange", () => {
  filterPostsByHash();
});
