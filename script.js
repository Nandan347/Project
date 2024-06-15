document.addEventListener("DOMContentLoaded", function() {
    // Search functionality
    const searchButton = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', function() {
        alert(`Searching for: ${searchInput.value}`);
    });

    // Toggle visibility of the panel
    const panelAll = document.querySelector('.panel-all');
    const panelOps = document.querySelector('.panel-ops');

    panelAll.addEventListener('click', function() {
        panelOps.classList.toggle('visible');
    });

    // Handle "See more" clicks
    const seeMoreButtons = document.querySelectorAll('.box-content p');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Redirecting to the respective category page.');
        });
    });
});
