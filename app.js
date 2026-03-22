// let passField = document.querySelector("input");
// let btn = document.querySelector("span i");

// btn.onclick = function(){
//     if(passField.type === "password") {
//         passField.type = "text";
//         btn.classList.add("hide-btn");
//     } else {
//         passField.type = "password";
//         btn.classList.remove("hide-btn");
//     }
// }

let passField = document.querySelector(".wrapper input");
let btn = document.querySelector(".wrapper span i");

btn.addEventListener("click", function () {

    if (passField.type === "password") {
        passField.type = "text";
        btn.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passField.type = "password";
        btn.classList.replace("fa-eye-slash", "fa-eye");
    }

});