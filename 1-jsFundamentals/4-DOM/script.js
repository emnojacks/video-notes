let header = document.getElementById("header");
console.log(header);

const errorList = document.getElementsByClassName("error-list");
console.log(errorList);


errorList[0].innerText = "I changed error 1";

for (let i = 0; i < errorList.length; i++) {
    errorList[i].style.color = "red";
}

for (error of errorList) {
    error.style.color = "green";
}

document.querySelector("#header");
document.querySelector(".error-list");
//first is for id, second is for class
//query selector only fishes for and returns the first instance in DOM!

const listItems = document.querySelectorAll("li");


listItems.forEach(li => {
    li.style.fontStyle = "italic";

})