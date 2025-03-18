//your JS code here. If required.
// Get references to the paragraph and button elements
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

// Add a click event listener to the button
enterButton.addEventListener("click", () => {
  // Change the content of the paragraph to "Entered Metaverse" wrapped in an <h1> tag
  statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
});