var slider = document.getElementById("slider");
var output = document.getElementById("sliderOutput");
output.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
    enigma.numRotations = parseInt(this.value);
    output.innerHTML = this.value;
    document.getElementById("output").innerText = "";
}

var enigma = {
    numRotations: parseInt(slider.value),
    encrypt: function(){
        var input = this.id;
        var output;
        if((input.charCodeAt(0) + enigma.numRotations) <= 122 ){
            output = String.fromCharCode(input.charCodeAt(0) + enigma.numRotations);
        } else {
            output = String.fromCharCode((input.charCodeAt(0) + enigma.numRotations) - 26);
        }
        if(document.getElementById("output").innerText == "..."){
            document.getElementById("output").innerText = output;
        } else {
            document.getElementById("output").innerText += output;
        }
    },
    decrypt: function(){
        document.querySelector("#decode").innerHTML = "";
        var input = document.querySelector("#decodeText").value.split("");
        var output;
        for(var i = 0; i < input.length; i++){
            if(input[i].charCodeAt(0) > 122 || input[i].charCodeAt(0) < 96){
                alert("You can only decode text that is made up of characters on the keyboard above.")
            } else {
                if((input[i].charCodeAt(0) - enigma.numRotations) <= 122 && (input[i].charCodeAt(0) - enigma.numRotations) > 96){
                    console.log(input[i].charCodeAt(0));
                    output = String.fromCharCode(input[i].charCodeAt(0) - enigma.numRotations);
                    console.log(output)
                } else if((input[i].charCodeAt(0) - enigma.numRotations) < 97){
                    console.log(input[i].charCodeAt(0));
                    output = String.fromCharCode((input[i].charCodeAt(0) - enigma.numRotations) + 26);
                    console.log(output)
                }
                console.log(document.querySelector("#decodeText").innerHTML)
                document.querySelector("#decode").innerHTML += output;
            }
        }
    },
    init: function(){
        var buttons = document.querySelectorAll('.button');
        for(var i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", enigma.encrypt);
        }
        document.querySelector("#decodeBtn").addEventListener("click", enigma.decrypt)
    }
}


/*
int numRoters;
max num of rotations is equal to 26 (aka num of chars)
create array the length of numRoters
each value of each item in the array is the rotation of each rotar
use loop to do this
every value should not exceed 0, unless the previous rotar in the array is equal to max num of rotations
except on the first rotar which does not need this check

inputs are buttons in the layout of the actual enigma

when charcode is entered, add the number of steps to it for each rotar to it
new charcode is encrypted version

to decrypt you must know the steps aka rotations of the rotors
a = 1
b = 2
c = 3

input = a
Roter step = 1

input = 1
ouput = 2 aka b

roter step 2
input = 1, aka a
output = 3, aka c



var input = "enigma";

roter steps is a int
input is char*/
