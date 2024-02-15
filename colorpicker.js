let body = document.querySelector("body");
let backgroundColorPicker = document.querySelector("#backgroundColorPicker");
let textColorPicker = document.querySelector("#textColorPicker");

let originalBackgroundColor = localStorage.getItem("colorBackground")
body.style.backgroudColor = originalBackgroundColor;
backgroundColorPicker.value = originalBackgroundColor;

let originalTextColor = localStorage.getItem("colorText");
body.style.color = originalTextColor;
textColorPicker.value = originalTextColor;

function changeColorBackground(){
    let newColor = backgroundColorPicker.value
    body.style.backgroundColor = newColor;
    localStorage.setItem("colorBackground" , newColor)
}
function changeColorText(){
   let newColor = textColorPicker.value
    body.style.color = newColor;
    localStorage.setItem("colorText" , newColor)
};
backgroundColorPicker.addEventListener("change", changeColorBackground);
textColorPicker.addEventListener("change", changeColorText);

/*****************/

let userComment = document.querySelector("#userComment");
let userCommentCounter = document.querySelector("#userCommentCounter");

function updateCommentCounter(){
    let userCommentLength = userComment.value.length;
    userCommentCounter.textContent = userCommentLength;
}

userComment.addEventListener("input", updateCommentCounter);