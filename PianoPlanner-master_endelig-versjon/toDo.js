
// Calls the dragDropFunction first
dragDrop();
function dragDrop() {
	
	// Gets all cards that have the classname .card
	let cards = document.getElementsByClassName("card");
	let len;
	len = cards.length;
	
	//get the collection of draggable items and add their draggable attribute
	for ( i = 0; i < len; i++) {
		
		cards[i].setAttribute('draggable', 'true');
	}
	
	//Variable that stores the dragging to the cards reference
	//This means that you don't need to define transfer data.
	//That means that the elements don't really need to have any IDs
	let card = null;
	
	//Initiates mouse dragging
	document.addEventListener('dragstart', function (e) {
		//set the card reference to this element
		card = e.target;
		
		// Something has to be defined
		// You have to use this incorrect syntax for the benefit of IE10+
		e.dataTransfer.setData('text', '');
		
	}, false);
	
	//Allows the dragging by preventing its default (dragging not allowed)
	document.addEventListener('dragover', function (e) {
		if (card) {
			e.preventDefault();
			
		}
		
	}, false);
	
	
	//Allows the element to be dropped (into dropZone)
	document.addEventListener('drop', function (e) {
		//if this element is a drop zone --> move the card to this dropZone
		//then prevent default
		
		if(e.target.className === "dropZone") {
			
			e.target.appendChild(card);
			
			e.preventDefault();
			
			//Calling getCount() functions that counts the cards in each dropZone after a card is dropped
			getCount1();
			getCount2();
			getCount3();
			getCount4();
			
		}
		
	}, false);
	
	// After drop
	// Was drop target valid?
	document.addEventListener('dragend', function () {
		card = null;
		
	}, false);
	
	
}
//-----

// Array for storing elements
// Is used for checking if at least one card exists or not
let cardArray = [];

// Button for adding card
let addCardButton = document.getElementById("addCardButton");

//Counter for ID
//For later use
let counter = 0;

//-----
// Eventlistener that calls the addCard() function when the addCardButton is clicked
addCardButton.addEventListener("click", e => {
	counter ++;
	addCard();
});

//-----
// Button for removing a card
let buttonRemove = document.getElementById("buttonRemove");

// Eventlistener that calls the removeCard() function when the buttonRemove button is clicked
buttonRemove.addEventListener("click", e => {
	counter --;
	removeCard();
});
//-----


// Function for adding a card
function addCard() {
	
	// Creates a card (li) and gets the element of drop1 (dropZone number 1)
	let card = document.createElement("li");
	let drop = document.getElementById("drop1");
	
	// Sets an attribute that makes the card draggable
	card.setAttribute("draggable", true);
	// Sets the classname of the card to .card
	card.className = "card";

	// Creates to new nodes and gives them the class name .pCard
	let nodeP = document.createElement("p");
	nodeP.className = "pCard";
	let nodeID = document.createElement("p");
	nodeID.className = "pCard";
	
	// Prompt that gives you the option to name the card
	let input = prompt("Write the title of the card: ");
	
	// Manipulates style of nodes
   	nodeP.style.fontSize = "x-large";
    	nodeP.style.top = "-20% ";
    	nodeID.style.fontSize = "small";
    	nodeID.style.top = "5%";
	
	// if the input is given:
    		// If the input matches characters that is not special characters (i.e. you can just write numbers or characters from A-Z)
	if (input) {
		if (input.match(/^[0-9a-zA-Z]+$/)) {
		}
		// if not: show this message and subtract 1 from the counter so that the ID of the next card will be correct
		else {
			alert("You can only type in numbers and letters. Try again.");
			counter --;
			// Return --> you have to press the add card button again to add a card
			return;
		}
		// calls the dragDrop function again so that it ensures that the new card is draggable
		dragDrop();
	}
	
	// Creates a textnode that has the input as a parameter
	let textNode = document.createTextNode(input);         // Create a text node
	
	// Asks if the task is important or not. If important: set "(!)" beside the title.
	let important = prompt("Is this task important? Write 'y' for yes or 'n' for no").toLowerCase();
	if(important === "y" || important === "yes") {
		textNode.nodeValue = (input + " (!)");
	}
	else if(important === "n" || important === "no"){
		textNode.nodeValue = input;
	}
	else {
		textNode.nodeValue = input;
	}
	
	if (important) {
		if (important.match(/^[0-9a-zA-Z]+$/)) {
		}
		/*else if (input === null) {
			alert("You have to give the card a title. Try again.");
			return;
		}*/
		else {
			alert("You can only type in numbers and letters. Try again.");
			counter--;
			return;
		}
		dragDrop();
		
	}
	
	// Sets the is of the card
	let id = "card" + counter;
	card.id = id;
	
	
	//Add to array:
	cardArray.push(card + "" + id);
	
	// node ID
	let cardNodeID = "ID: " + id;
	let textNodeID = document.createTextNode(cardNodeID);
	
	// Appending childs
	nodeP.appendChild(textNode);
	card.appendChild(nodeP);
	nodeID.appendChild(textNodeID);
	card.appendChild(nodeID);
	drop.appendChild(card);
	
	// For checking in the console that a card has been created 
	console.log("Nytt kort opprettet: " + cardNodeID);
	
	// Calls all the getCount functions and also calls the dragDrop function again so that it ensures that the new card is draggable
	getCount1();
	getCount2();
	getCount3();
	getCount4();
	dragDrop();
	
	
}
//-----


// Function for removing a card

function removeCard() {
	// If there is one card or more in the array
	if(cardArray.length > 0) {
		
		let deleteCardID = prompt("Write the ID of the card you want to delete (e.g. --> card1): ").toLowerCase();
		if (deleteCardID) {
			if (deleteCardID.match(/^[0-9a-zA-Z]+$/)) {
			}
			else {
				alert("You can only type in numbers and letters. Try again.");
				return;
			}
		}
		
		let deleteOrNot = prompt("Do you want to delete this card?" + " Write 'y' for yes or 'n' for no").toLowerCase();
		
		// Gets the parent node of cardIDOfCard
		let cardIDOfCard = document.getElementById(deleteCardID);
		let dropParent = cardIDOfCard.parentNode;
		
		if (deleteOrNot === "y" || deleteOrNot === "yes") {
			// Removes cardIDOfCard from the parent(of the given dropZone)
			dropParent.removeChild(cardIDOfCard);
			
		} else if (deleteOrNot === null) {
			return;
		} else {
			return;
		}
		
		if (deleteOrNot) {
			if (deleteOrNot.match(/^[0-9a-zA-Z]+$/)) {
			}
			else {
				alert("You can only type in numbers and letters. Try again.");
				return;
			}
		}
	}
	else {
		// If there isn't one card or more in the array
		alert("You haven't added any cards yet!");
		return;
	}
	
	getCount1();
	getCount2();
	getCount3();
	getCount4();
	dragDrop();
	
}


// Functions that shows have many cards each dropZone haves (To do, Assistance etc):



// Declares variables and gets the elements for use in getCount1();

let parent1;
let toDoCount;
let user1ToDo;
toDoCount = document.getElementById("toDoActivity").innerHTML = "0";
user1ToDo = document.getElementById("userToDo-1").innerHTML = "0";



// Function that counts the cards in the TO DO dropZone

function getCount1 (parent1) {
	
	parent1 = document.getElementById("drop1");
	
	// Counts children of the parent
	let children = parent1.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("***********************");
	console.log("I drop1  " + cnt);
	console.log("---------------");
	
	// Makes the variable to a string
	let cntToString = cnt.toString();
	toDoCount = document.getElementById("toDoActivity").innerHTML = cntToString;
	user1ToDo = document.getElementById("userToDo-1").innerHTML = cntToString;
	
	// Shows the number of cards in text
	console.log(toDoCount + " toDoCount ");
	console.log(user1ToDo + " user1ToDo ");
	return;
	
}
//-----

// Declares variables and gets the elements for use in getCount2();

let parent2;
let assistanceActivity;
let user1Assistance;
assistanceActivity= document.getElementById("assistanceActivity").innerHTML = "0";
user1Assistance = document.getElementById("userAssistance-1").innerHTML = "0";

// Function that counts the cards in the ASSISTANCE dropZone

function getCount2 (parent2) {
	
	parent2 = document.getElementById("drop2");
	
	let children = parent2.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("I drop2 " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	assistanceActivity = document.getElementById("assistanceActivity").innerHTML = cntToString;
	user1Assistance = document.getElementById("userAssistance-1").innerHTML = cntToString;
	
	console.log(assistanceActivity + " assistanceActivity");
	console.log(user1Assistance + " user1Assistance");
	return;
	
}
//-----

// Declares variables and gets the elements for use in getCount3();

let parent3;
let inProgressActivity;
let user1InProgress;
inProgressActivity = document.getElementById("inProgressActivity").innerHTML = "0";
user1InProgress = document.getElementById("userInProgress-1").innerHTML = "0";

// Function  hat counts the cards in the IN PROGRESS dropZone

function getCount3 (parent3) {
	
	parent3 = document.getElementById("drop3");
	
	let children = parent3.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("I drop3 " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	inProgressActivity = document.getElementById("inProgressActivity").innerHTML = cntToString;
	user1InProgress = document.getElementById("userInProgress-1").innerHTML = cntToString;
	console.log(inProgressActivity + " inProgressActivity");
	console.log(user1InProgress + " user1InProgress");
	return;
	
}
//-----

// Declares variables and gets the elements for use in getCount4();

let parent4;
let finishedActivity;
let user1Finished;
finishedActivity = document.getElementById("finishedActivity").innerHTML = "0";
user1Finished = document.getElementById("userFinished-1").innerHTML = "0";


// Function that counts the cards in the FINISHED dropZone

function getCount4 (parent4) {
	
	parent4 = document.getElementById("drop4");
	
	let children = parent4.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("I drop4 " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	finishedActivity = document.getElementById("finishedActivity").innerHTML = cntToString;
	user1Finished = document.getElementById("userFinished-1").innerHTML = cntToString;
	console.log(finishedActivity + " finishedActivity");
	console.log(user1Finished + " user1Finished");
	return;
	
}
//-----
