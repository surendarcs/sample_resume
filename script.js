// Load header and footer content when the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadContentFromFile('header.txt', 'headerContent');
    loadContentFromFile('footer.txt', 'footerContent');
});

// Function to load content from a file into a specified element
function loadContentFromFile(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.log('Error loading file:', error));
}

// Function to load content dynamically into the iframe
function loadContent(file) {
    document.getElementById('contentFrame').src = file; // Set the iframe source to the selected page
}

// Optionally load the 'aboutme.html' when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    loadContent('aboutme.html'); // Load default content on initial page load
});
