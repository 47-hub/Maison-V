const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.querySelector(".section").scrollIntoView({
        behavior: "smooth"
    });

});