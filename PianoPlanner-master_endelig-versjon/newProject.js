//function that adds text from the first input field to a list that displays the input
function addLi(){
    var textValue = document.getElementById("textBox2").value,
        listNode = document.getElementById("listUsers"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
}

//function that adds text from the second input field to a list that displays the input
function addName(){
    var nameValue = document.getElementById("textBox1").value,
        nameNode = document.getElementById("listedPname"),
        liNameNode = document.createElement("LI"),
        textNameNode = document.createTextNode(nameValue);
    
        liNameNode.appendChild(textNameNode);
        nameNode.appendChild(liNameNode);
    console.log(document.getElementById("listUsers").innerHTML)
}

//A function that lets the user press enter instead of "add" to add input to the list
//also makes the inputfield blank after pressing enter
var input = document.getElementById("textBox1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addProjectName").click();
     event.currentTarget.value = "";
  }
});

//A function that lets the user press enter instead of "add" to add input to the list
//also makes the inputfield blank after pressing enter
var input = document.getElementById("textBox2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addUserButton").click();
      event.currentTarget.value = "";
  }
});

//Remove buttons that removes all the input from user
function removeAll1(){
    document.getElementById("listUsers").innerHTML = "";
}

function removeAll(){
    document.getElementById("listedPname").innerHTML = "";
}




