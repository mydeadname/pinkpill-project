// script.js - refresh page on any link click or form submission
document.addEventListener('DOMContentLoaded', function() {
    // All anchor tags: prevent navigation, refresh page
    const anchors = document.getElementsByTagName('a');
    for (let a of anchors) {
        a.addEventListener('click', function(event) {
            event.preventDefault();
            location.reload();
        });
    }

    // All forms: prevent actual submission, refresh page
    const forms = document.getElementsByTagName('form');
    for (let form of forms) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            location.reload();
        });
    }

    // Also catch any other elements that might act as links (e.g., button with link behavior)
    // but the above covers standard <a> and <form>.
});
