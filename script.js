var boxOne=document.querySelector(".club-box-0");
var boxTwo=document.querySelector(".club-box-1");
var boxThree=document.querySelector(".club-box-2");
var boxFour=document.querySelector(".club-box-3");
var boxFive=document.querySelector(".club-box-4");
var boxSix=document.querySelector(".club-box-5");
var boxSeven=document.querySelector(".club-box-6");

boxTwo.classList.add("display-box");
boxThree.classList.add("display-box");
boxFour.classList.add("display-box");
boxFive.classList.add("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.add("display-box");

function displayOne(){
    boxOne.classList.remove("display-box")
    boxTwo.classList.add("display-box");
boxThree.classList.add("display-box");
boxFour.classList.add("display-box");
boxFive.classList.add("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.add("display-box");
}

function displayTwo(){
    boxOne.classList.add("display-box")
    boxTwo.classList.remove("display-box");
boxThree.classList.add("display-box");
boxFour.classList.add("display-box");
boxFive.classList.add("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.add("display-box");
}
function displayThree(){
    boxOne.classList.add("display-box")
    boxTwo.classList.add("display-box");
boxThree.classList.remove("display-box");
boxFour.classList.add("display-box");
boxFive.classList.add("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.add("display-box");
}

function displayFour(){
    boxOne.classList.add("display-box")
    boxTwo.classList.add("display-box");
boxThree.classList.add("display-box");
boxFour.classList.remove("display-box");
boxFive.classList.add("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.add("display-box");
}


function displayFive(){
    boxOne.classList.add("display-box")
    boxTwo.classList.add("display-box");
boxThree.classList.add("display-box");
boxFour.classList.add("display-box");
boxFive.classList.remove("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.add("display-box");
}


function displaySix(){
    boxOne.classList.add("display-box")
    boxTwo.classList.add("display-box");
boxThree.classList.add("display-box");
boxFour.classList.add("display-box");
boxFive.classList.add("display-box");
boxSix.classList.remove("display-box");
boxSeven.classList.add("display-box");
}


function displaySeven(){
    boxOne.classList.add("display-box")
    boxTwo.classList.add("display-box");
boxThree.classList.add("display-box");
boxFour.classList.add("display-box");
boxFive.classList.add("display-box");
boxSix.classList.add("display-box");
boxSeven.classList.remove("display-box");
}