function removeShorts() {
    const shortsSection = document.querySelector("#contents-container");
    if (shortsSection && shortsSection.closest(".style-scope.ytd-rich-shelf-renderer")) {
        shortsSection.closest(".style-scope.ytd-rich-shelf-renderer").remove();
    }
}

// Observe changes to the DOM and reapply the removal if necessary
const observer = new MutationObserver(() => {
    removeShorts();
});

// Start observing the body of the document for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial removal attempt
removeShorts();
