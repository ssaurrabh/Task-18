function show(){
    let sear = document.getElementById("sea").value
    let head = document.getElementById("head")
    if(sear !== ""){
        head.innerHTML = "Hello, "+ sear
    }
}

function red(){
    let red = document.getElementById("red")
    red.style.backgroundColor = "red";
}

function blue(){
    let blue = document.getElementById("blue")
    blue.style.backgroundColor = "blue";
}

function green(){
    let green = document.getElementById("green")
    green.style.backgroundColor = "green";
}

function yellow(){
    let ylw = document.getElementById("yellow")
    ylw.style.backgroundColor = "yellow";
}