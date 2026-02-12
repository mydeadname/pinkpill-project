// Make every link and form submission refresh the page
document.addEventListener('click', function(e) {
    // If the clicked element is an anchor tag, prevent navigation and refresh
    if (e.target.tagName === 'A') {
        e.preventDefault();
        location.reload();
    }
});

document.addEventListener('submit', function(e) {
    // Prevent form submission and refresh the page
    e.preventDefault();
    location.reload();
});

// Optional: preserve mobile/desktop toggle functions as no-ops
window.disableMobile = function() { location.reload(); };
window.enableMobile = function() { location.reload(); };
