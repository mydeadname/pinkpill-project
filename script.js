// script.js – refresh the page on any link click or form submission
document.addEventListener('DOMContentLoaded', function() {
    // Intercept all clicks on <a> elements
    document.addEventListener('click', function(e) {
        let target = e.target.closest('a');
        if (target) {
            e.preventDefault();
            location.reload();
        }
    });

    // Intercept all form submissions
    document.addEventListener('submit', function(e) {
        let target = e.target.closest('form');
        if (target) {
            e.preventDefault();
            location.reload();
        }
    });
});
