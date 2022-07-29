descriptionEl = document.querySelectorAll(".description");

titleEl = document.querySelectorAll(".title");


for (i = 0; i < descriptionEl.length; i++) {
    descriptionEl[i].setAttribute("data-id", i);
    titleEl[i].setAttribute("data-id", i);
    descriptionEl[i].style.display = "none";
}



var showHide = function (event) {
    var getId = event.target.getAttribute("data-id");
    var showTitle = titleEl[getId];
    var showDescription = descriptionEl[getId];

    if (showDescription.style.display === "none") {
        showDescription.setAttribute("style", "display: block");
        showTitle.setAttribute("style", "animation: pulse 0.1s infinite");
    } else {
        showDescription.setAttribute("style", "display:none");
        showTitle.setAttribute("style", "animation: none");
    }

}

for (i = 0; i < titleEl.length; i++) {
    titleEl[i].addEventListener("click", showHide)
}

