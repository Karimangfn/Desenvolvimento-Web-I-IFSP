let leftHeight = document.getElementById("contentLeft").clientHeight;
console.log(leftHeight);

let rightContent = document.getElementsByClassName("col-6");
console.log(rightContent[0]);

for (i=0; i<rightContent.length; i++) {
    document.getElementsByClassName("col-6")[i].style.height = leftHeight/9 - 11 +"px";
}