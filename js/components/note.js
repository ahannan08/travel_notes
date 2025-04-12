export const setupNotes = () => {
    const addBtn = document.getElementById("add-note-btn");
    const titleInput = document.getElementById("note-title-input"); // Input for title
    const contentInput = document.getElementById("note-content-input"); // Input for content
    const list = document.getElementById("note-list");
  
    addBtn.addEventListener("click", () => {
      const title = titleInput.value.trim();
      const content = contentInput.value.trim();
      
      if (!title || !content) return; // Ensure both fields are filled
  
      // Get current timestamp
      const timestamp = new Date().toLocaleString();
  
      // Create the note card
      const note = document.createElement("div");
      note.className = "note-card";
  
      // Create and append title (heading)
      const noteTitle = document.createElement("h3");
      noteTitle.className = "note-title";
      noteTitle.textContent = title;  // Use the user-input title
      note.appendChild(noteTitle);
  
      // Create and append content
      const noteContent = document.createElement("p");
      noteContent.className = "note-content";
      noteContent.textContent = content; // Use the user-input content
      note.appendChild(noteContent);
  
      // Create and append timestamp
      const timestampElem = document.createElement("small");
      timestampElem.className = "note-timestamp";
      timestampElem.textContent = timestamp;
      note.appendChild(timestampElem);
  
      // Create and append delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        note.remove();  // Remove the note when the delete button is clicked
      });
      note.appendChild(deleteBtn);
  
      // Append the new note to the list
      list.appendChild(note);
  
      // Clear inputs after adding note
      titleInput.value = "";
      contentInput.value = "";
    });
  };
  