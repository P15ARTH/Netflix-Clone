
alert("It is not Responsive Website request you to open in Desktop mode");

var acc = document.querySelectorAll(".accordion");
var i;

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";

    }
  });
}

