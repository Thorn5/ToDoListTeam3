function setHamCol(color) {
    document.getElementById('hamStripe1').style.backgroundColor = color;
    document.getElementById('hamStripe2').style.backgroundColor = color;
    document.getElementById('hamStripe3').style.backgroundColor = color;
}

function setPlusCol (color) {
    document.getElementById('vertical').style.backgroundColor = color;
    document.getElementById('horizontal').style.backgroundColor = color;
}

function hamClick() {
    console.log('click');
}

// Event Listner
const burgers = document.querySelectorAll(".hamburgerMenu");

for (let i = 0; i < burgers.length; i++) {
    // burgers[i].addEventListener("click", function() {
    burgers[i].addEventListener("mouseover", function() {
        setHamCol(red);
        console.log('hover!!');
    });
}

for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", function() {
    // burgers[i].addEventListener("mouseover", function() {
    console.log("click worked");
  });
}