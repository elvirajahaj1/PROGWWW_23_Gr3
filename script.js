function changeContent(page) {
    var contentDiv = document.getElementById('content');

    // Fetch content dynamically from separate HTML files
    var filePath = page + '.html';

    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            contentDiv.innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            contentDiv.innerHTML = '<h2>Error Loading Page</h2><p>Sorry, there was an error loading the page.</p>';
        });
}