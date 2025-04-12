// Import necessary modules
import { fetchImages } from "../scripts/api.js";
import { showSpinner, hideSpinner } from "./spinner.js";
import { renderPagination } from "./pagination.js";

// Current display format for results: 'grid' or 'list'
let currentFormat = 'grid';

// Toggles the display format between grid and list
const toggleDisplay = () => {
  currentFormat = currentFormat === 'grid' ? 'list' : 'grid';
  document.getElementById("results").className = currentFormat;
};

// Renders the search results on the page
const renderResults = (hits) => {
  const results = document.getElementById("results");
  results.innerHTML = ''; // Clear previous results

  hits.forEach(img => {
    const card = document.createElement("div");
    card.className = "image-card";
    card.innerHTML = `
      <img src="${img.webformatURL}" alt="${img.tags}" />
      <span>By ${img.user}</span>
    `;
    results.appendChild(card); // Append each image card to the results container
  });
};

// Displays an error message in the results container
const renderError = (message) => {
  const results = document.getElementById("results");
  results.innerHTML = `<div class="error-msg">${message}</div>`;
};

// Sets up the search functionality
export const setupSearch = () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const toggleBtn = document.getElementById("toggle-view");

  let currentPage = 1; // Tracks the current page for pagination

  // Handles the search functionality
  const handleSearch = (page = 1) => {
    const query = input.value.trim(); // Get the search query
    if (!query) return; // Do nothing if the query is empty

    showSpinner(); // Show loading spinner
    fetchImages(query, page)
      .then(data => {
        hideSpinner(); // Hide spinner after fetching data
        if (!data.hits || data.hits.length === 0) {
          renderError("No results found. Try a different search.");
          return;
        }
        renderResults(data.hits); // Render the fetched results
        renderPagination(Math.ceil(data.totalHits / 20), page, handleSearch); // Render pagination
      })
      .catch(err => {
        hideSpinner(); // Hide spinner on error
        renderError("API error: Unable to fetch images.");
        console.error("Fetch error:", err);
      });
  };

  // Handle form submission for search
  form.onsubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    currentPage = 1; // Reset to the first page
    handleSearch(currentPage); // Perform search
  };

  // Handle toggle view button click
  toggleBtn.onclick = toggleDisplay;
};
