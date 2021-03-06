/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function handleDrop(event) {
    document.getElementById("graphDropdown").classList.toggle("show");
}

/* Sets the text of the selected graph based on what was clicked. */
function handleGraphSelection(event) {
    // get label to change text
    var label = document.getElementById('graphLabel');
    label.innerHTML = "Selected Graph: " + event.target.innerText;
}

// Close the dropdown if the user clicks outside of it
// and also handle graph selection
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (event.target.matches('a')) {
            handleGraphSelection(event);
        }

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}