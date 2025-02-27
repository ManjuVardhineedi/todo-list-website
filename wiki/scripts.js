function searchWiki() {
    const query = document.getElementById('searchQuery').value;
    if (!query) return;

    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.query.search);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(results) {
    const resultsDiv = document.getElementById('wikiResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        resultElement.innerHTML = `
            <h3><a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">${result.title}</a></h3>
            <p>${result.snippet}...</p>
        `;

        resultsDiv.appendChild(resultElement);
    });
}
