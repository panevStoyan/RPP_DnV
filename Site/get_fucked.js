document.addEventListener('copy', function (event) {
    // Prevents copying for a specific element
    if (event.target.id === 'protected-content') {
        event.preventDefault();
        alert('No copying here m8, get fucked :D');
    }
    //thanks for the explenation
});