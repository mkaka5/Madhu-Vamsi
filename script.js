function myFunction() {
    var x = document.getElementById("ResponsiveMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
    }