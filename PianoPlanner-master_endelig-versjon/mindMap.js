//function that adds text from the first input field to a list that displays the input
function addIdeaName(){
    var textValue = document.getElementById("newField1").value,
        listNode = document.getElementById("showIdeaName"),
        liNode = document.createElement("p"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
    
}

//A function that lets the user press enter instead of "add" to add input to the list
//also makes the inputfield blank after pressing enter
var input = document.getElementById("newField1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addButton1").click();
     event.currentTarget.value = "";
  }
});

//function that adds text from the second input field to a list that displays the input
function addIdea(){
    var textValue = document.getElementById("newField2").value,
        listNode = document.getElementById("showIdea"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
    
}

//A function that lets the user press enter instead of "add" to add input to the list
//also makes the inputfield blank after pressing enter
var input = document.getElementById("newField2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addButton2").click();
      event.currentTarget.value = "";
  }
});

//function that adds text from the third input field to a list that displays the input
function addIdea1(){
    var textValue = document.getElementById("newField3").value,
        listNode = document.getElementById("showIdea1"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
}

//A function that lets the user press enter instead of "add" to add input to the list
//also makes the inputfield blank after pressing enter
var input = document.getElementById("newField3");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addButton3").click();
     event.currentTarget.value = "";
  }
});

//Remove buttons that removes all the input from user
function removeAll(){
    document.getElementById("showIdea").innerHTML = "";
}

function removeAll1(){
    document.getElementById("showIdea1").innerHTML = "";
}