// Renders pagination controls
export const renderPagination = (totalPages, currentPage, onPageChange) => {
  const container = document.getElementById("pagination");
  container.innerHTML = ''; // Clear previous pagination controls

  // Display current page info
  const pageInfo = document.createElement("span");
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  pageInfo.className = "page-info";
  container.appendChild(pageInfo);

  // Add "Prev" button if not on the first page
  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.textContent = "Prev";
    prev.onclick = () => onPageChange(currentPage - 1); // Go to the previous page
    container.appendChild(prev);
  }

  // Add "Next" button if not on the last page
  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.textContent = "Next";
    next.onclick = () => onPageChange(currentPage + 1); // Go to the next page
    container.appendChild(next);
  }
};
