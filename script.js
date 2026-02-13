/**
 * script.js - Makes all links and forms refresh the page.
 * This simulates a static archive where no actual navigation or posting occurs.
 * 
 * Programmer's note: We attach event listeners to the whole document to catch
 * clicks on <a> elements and submits on <form> elements. We prevent default
 * behavior and reload the page, except for anchor links (starting with "#")
 * which are allowed for internal page jumps.
 */

(function() {
    'use strict';

    // Function to refresh the page
    function refreshPage(event) {
        // For links: if it's an anchor link (starts with '#'), allow default behavior
        if (event.type === 'click' && event.target.tagName === 'A') {
            const href = event.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                return; // Do not prevent default for anchor links
            }
        }
        event.preventDefault();
        window.location.reload();
    }

    // Add click listener to all <a> elements (using event delegation)
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a'); // Ensure we catch clicks on nested elements like images
        if (target) {
            refreshPage(event);
        }
    });

    // Add submit listener to all <form> elements
    document.addEventListener('submit', function(event) {
        // Exclude forms that might be used for page jumps (like page switcher) – but we'll just refresh anyway
        refreshPage(event);
    });

    // Additionally, handle the "Refresh" buttons explicitly (they already point to "#", but JS will catch them)
    // Also handle select changes (like board selector) to refresh
    const boardSelect = document.getElementById('boardSelectMobile');
    if (boardSelect) {
        boardSelect.addEventListener('change', function(event) {
            event.preventDefault();
            window.location.reload();
        });
    }

    // Style selector (if we wanted to actually change style, but here we just refresh)
    const styleSelector = document.getElementById('styleSelector');
    if (styleSelector) {
        styleSelector.addEventListener('change', function(event) {
            event.preventDefault();
            window.location.reload();
        });
    }

    // Any other interactive elements that would normally cause navigation (e.g., "Start a New Thread" link)
    // are already covered by the click handler.
})();
