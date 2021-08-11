var clickElement = document.querySelectorAll(".box");
for (var i = 0; i < clickElement.length; i++) {
    var firstElement = clickElement[i].firstElementChild;
    firstElement.onclick = function(e) {
        e.target.nextElementSibling.classList.toggle("div1");
    };
}