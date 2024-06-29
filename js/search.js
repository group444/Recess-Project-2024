document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const query = document.querySelector('#search-form input[name="query"]').value.trim();

        if (query) {
            // Redirect to search results page with the query as a URL parameter
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });
});
