import { setupSearch } from "./components/searchBar.js";
import { setupNotes } from "./components/note.js"; // ✅ Import this!

window.onload = () => {
  setupSearch();
  setupNotes(); // ✅ Call this to activate note input
};
