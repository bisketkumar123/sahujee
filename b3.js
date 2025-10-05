// let newBtn = document.createElement("button");
// newBtn.innerText ="click me!";

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").append(newBtn);

/*agar kisi bhi button par click kare par kucha print krana hai to..! */
// let ck=document.querySelector(".ck");

// ck.onclick = () => {
//     console.log ("Hello I'm sahu");
// };

let ck = document.querySelector(".ck");
ck.addEventListener("click", () => {
    console.log("Hello sahu1");
});
/* remove karne ke liy rule.. */
const sahu2 = () => {
    console.log("Hello sahu2");
};

ck.addEventListener("click", sahu2);  /*() => {
//     console.log("Hello sahu 2");
// }); */

ck.addEventListener("click", () => {
    console.log("Hello sahu3");
});

ck.removeEventListener("click", sahu2);

let body = document.querySelector("body");
let currMode = "light";
ck.addEventListener("click", () => {
    if (currMode ==="light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add ("light");
        body.classList.remove ("dark");
    }
    console.log(currMode);
});