let buttons = document.querySelectorAll(".button");

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();

    // let overlay = document.querySelector("span")
    let overlay = document.createElement("span");
    overlay.classList.add("overlay");


    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    // let x = e.offsetX;
    // let y = e.offsetY;

    overlay.style.left = x + "px";
    overlay.style.top = y + "px";

    e.target.appendChild(overlay);

    // console.log(e.clientX);
    // console.log(e.target.offsetLeft);
    // console.log(e.target);

    setTimeout(() => {
      overlay.remove();
    }, 500);
  })
}