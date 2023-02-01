const color = ["red","green","blue",
"yellow","orange","purple",
"brown","gray","gold"];

const button = document.querySelector(".change");

button.addEventListener("click",changeColor);

function changeColor() {
   
    const colors = color[Math.floor(Math.random() * color.length)]
   
    //c1:
    document.body.setAttribute("style", `background: ${colors}`);
    //c2:
    // document.body.style.background = colors;

}