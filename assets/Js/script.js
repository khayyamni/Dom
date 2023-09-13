"use strict"

// let elem = document.getElementsByTagName("h1")
// let elem = document.getElementsByClassName("test")

// let elem = document.getElementById("head")

// let elem = document.querySelector("#head")
// let elems = document.querySelectorAll("h1")

// console.log(elems);


// let span = document.querySelector(".header .header-item span")

// let p = document.querySelector(".header p")
// let p = document.querySelectorAll(".header p")

// console.log(span);

// console.log(p);


// let span = document.querySelector(".header .header-item span");


// let elems = document.querySelectorAll(".header p");

// console.log(span.innerText);

// console.log(span.innerHTML);


// let span = document.querySelector(".header .header-item span");


// let elems = document.querySelectorAll(".header p");


// console.log(span);

// span.innerText = "Azerbaycan";



// let span = document.querySelector(".header .header-item span");


// let elems = document.querySelectorAll(".header p");


// let elem = document.getElementById("text");

// console.log(elem.innerText);



// let span = document.querySelector(".header .header-item span");


// let elems = document.querySelectorAll(".header p");


// elems.forEach(element => {
//     console.log(element)
// });


// for (const item of elems) {
//     console.log(item);
// }


// for (let i = 0; i < elems.length; i++) {

//     if (elems[i].innerText == "salam") {
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }


// let span = document.querySelector(".header .header-item span");


// let elems = document.querySelectorAll(".header p");



// for (let i = 0; i < elems.length; i++) {

//     if (elems[i].innerText == "salam") {
//         elems[i].style.backgroundColor = "green"
//     }else{
//         elems[i].style.backgroundColor = "red"
//     }
// }


// let h1 = document.querySelectorAll("h1")

// h1.style.color = "magenta"
// h1.style.marginTop = "100px"

// let h1 = document.querySelectorAll("h1")

// for (const elem of h1) {

//     elem.style.color = "magenta"
//     elem.style.marginTop = "100px"
// }


// let elems = document.querySelectorAll("h1")

// elems[0].style.color = "magenta";



// let elem = document.getElementById("head")

// elem.innerHTML = "<a>salamlar millet</a>"
// elem.innerText = "<a>salamlar millet</a>"

// elem.className = "header-color mt-5"

// elem.classList.add("header-color")
// elem.classList.add("mx-5")
// elem.classList.remove("mt-5")

// let button = document.querySelector("button");

// if (button.classList.contains("btn-primar")) {
//     button.classList.remove("btn-primary");
//     button.classList.add("btn-success")
// }else{
//     button.classList.add("btn-warning")
// }

// let button = document.querySelector("button");

// button.onclick = function () {
//     alert("Hello world");
// }

// button.onclick = function () {
//     alert("bye bye");
// }


// button.addEventListener("click",function(){
//     console.log("yes");
// })


// let button = document.querySelector("button");

// button.onclick = function () {

// }

// button.onclick = function () {

// }


// button.addEventListener("click",function(){
//     alert("Hello world");
// })

// button.addEventListener("click",function(){
//     alert("bye bye");
// })


// button.addEventListener("click",function(){
//     alert("vay vay");
// })


// let btnOn = document.querySelector(".buttons button:nth-child(1)");
// let btnOff = document.querySelector(".buttons button:nth-child(2)");
// let body = document.querySelector("body");

// btnOn.addEventListener("click", function () {

//     if (!body.classList.contains("body-on")) {
//         body.classList.add("body-on")
//         body.classList.remove("body-off")
//     }
// });

// btnOff.addEventListener("click", function () {
//     if (!body.classList.contains("body-off")) {
//         body.classList.add("body-off")
//         body.classList.remove("body-on")
//     }
// });




let body = document.querySelector("body");

let button = document.querySelector(".buttons button")


button.addEventListener("click", function(){
   if (body.classList.contains("body-off")) {
        body.classList.remove("body-off")
        this.innerText = "On"
    }else{
        body.classList.add("body-off")
        this.innerText = "Off"
    }
})

