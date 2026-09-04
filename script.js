/* ==================================================
   PAGE 3 — NO BUTTON
================================================== */

const noButton = document.getElementById("noButton");


if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );

    noButton.addEventListener(
        "touchstart",
        moveNoButton
    );

}


function moveNoButton() {

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;


    const padding = 20;


    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;


    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    noButton.style.position = "fixed";

    noButton.style.left =
        `${randomX}px`;

    noButton.style.top =
        `${randomY}px`;

}


/* ==================================================
   YES BUTTON
================================================== */

function goToPage4() {

    window.location.href =
        "page4.html";

}

/* ==================================================
   PAGE 4 — NO BUTTON
================================================== */


function goToPage5() {
    window.location.href = "page5.html";
}