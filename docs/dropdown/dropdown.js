/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function handleDrop() {
    document.getElementById("graphDropdown").classList.toggle("show");
}

function handleGraphSelection(event) {
    // get label to change text
    var label = document.getElementById('graphLabel');
    label.innerText = "Selected Graph: " + event.target.innerText;
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') || !event.taget.matches('a')) {
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