let parentElement = document.querySelectorAll(".container");
for (let i = 0; i < parentElement.length; i++) {
    let clickElement = parentElement[i].querySelector(".box");
    let childElement = clickElement.querySelector(".box1");
    childElement.onclick = function(e) {
        e.target.parentElement.nextElementSibling.classList.toggle("div1");
    };
}
console.log([parentElement]);