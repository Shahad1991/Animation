var containerCount = 5; // Antal containere
var currentContainer = 1;

function showNextContainer() {
    if (currentContainer > containerCount) {
        currentContainer = 1; // Start forfra, når alle containere er vist
    }
    // Skjul alle containere
    for (var i = 1; i <= containerCount; i++) {
        document.querySelector('.container-' + i).style.display = 'none';
    }
    // Vis den aktuelle container
    document.querySelector('.container-' + currentContainer).style.display = "block";

    document.querySelector(".container-" + currentContainer).classList.add("test");

    // Fortsæt til næste container efter et bestemt tidsinterval (her 1 sekund)
    setTimeout(function () {
        currentContainer++;
        showNextContainer();
    }, 1000); // Juster tidsintervallet efter behov
}
showNextContainer(); // Start afspilning af containere
// Start afspilning af containere
playContainersInSequence();
