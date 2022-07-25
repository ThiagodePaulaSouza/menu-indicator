const list = document.querySelectorAll("li");
const body = document.querySelector("body");

const changeBGColor = (event) => {
  let color = event.target.getAttribute("data-color");
  body.style.backgroundColor = color;
};

for (let i = 0; i < list.length; i++) {
  list[i].onmouseover = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

list.forEach((elements) => {
  elements.addEventListener("mouseenter", changeBGColor);
});
