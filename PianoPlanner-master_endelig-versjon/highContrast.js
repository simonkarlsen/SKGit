
var contrastColor = document.getElementById("isChecked");

contrastColor.addEventListener("click", background);
contrastColor.addEventListener("click", sidebar);
contrastColor.addEventListener("click", header);
contrastColor.addEventListener("click", movingCircles);
contrastColor.addEventListener("click", toDoPage);
contrastColor.addEventListener("click", mindMapPage);
contrastColor.addEventListener("click", resourcesPage);
contrastColor.addEventListener("click", frontpage);
contrastColor.addEventListener("click", myProjects);
contrastColor.addEventListener("click", newProject);


/* 
 Background start
*/
function background() {

    if(document.getElementById("isChecked").checked) {
        document.body.style.backgroundColor = "#1b1e47";
    } else {
        document.body.style.backgroundColor = "#8781bd";
    }
}
/* 
 Background end
*/


/* 
 SideBar start
*/
function sidebar() {

    if (document.getElementById("isChecked").checked) {

        document.getElementById("sideBar").style.backgroundColor = "#000000";

        document.getElementById("toDoImg").src="images/todo-yellow.png";
        document.getElementById("toDoImg").style.border = "1px solid #ffc40D";

        document.getElementById("mindMapImg").src="images/lamp-yellow.png";
        document.getElementById("mindMapImg").style.border = "1px solid #ffc40D";

        document.getElementById("resourcesImg").src="images/files-yellow.png";
        document.getElementById("resourcesImg").style.border = "1px solid #ffc40D";

    } else {

        document.getElementById("sideBar").style.backgroundColor = "#d0d0d0";

        document.getElementById("toDoImg").src="images/todo.png";
        document.getElementById("toDoImg").style.border = "1px solid #000000";

        document.getElementById("mindMapImg").src="images/lamp.png";
        document.getElementById("mindMapImg").style.border = "1px solid #000000";

        document.getElementById("resourcesImg").src="images/files.png";
        document.getElementById("resourcesImg").style.border = "1px solid #000000";

    }
}
/* 
 SideBar end
*/


/* 
 Header start
*/
function header() {

    if (document.getElementById("isChecked").checked) {

        document.getElementById("logo").src="images/logo_hvitskrift-kopi.png";

        document.getElementById("headerWrapper").style.backgroundColor = "#2d3b4f";
        document.getElementById("headerWrapper").style.color = "#ffc40d";

        var elements = document.getElementsByClassName("toDoBlock"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#6495db";
        }
    
        elements = document.getElementsByClassName("assistanceBlock");
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#7f4faf";
        }
    
        elements = document.getElementsByClassName("inProgressBlock");
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#72af56";
        }
    
        elements = document.getElementsByClassName("finishedBlock"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#8e7840";
        }

    } else {

        document.getElementById("logo").src="images/logo_lillaskrift-kopi.png";

        document.getElementById("headerWrapper").style.backgroundColor = "#d8d8d8";
        document.getElementById("headerWrapper").style.color = "#585555"; 
        
        elements = document.getElementsByClassName("toDoBlock"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#b5d9e8";
        }
    
        elements = document.getElementsByClassName("assistanceBlock");
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#ffa49a";
        }
    
        elements = document.getElementsByClassName("inProgressBlock");
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#f8ffb9";
        }
    
        elements = document.getElementsByClassName("finishedBlock"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#aeecb6";
        }
    }
}
/* 
 Header end
*/


/* 
 Moving Circles start
*/
function movingCircles() {
    if (document.getElementById("isChecked").checked) {

        var elements = document.getElementsByClassName("movingCircle"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#326819";
        }

    } else {

        elements = document.getElementsByClassName("movingCircle"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#5046aa";
        }

    }
}
/* 
 Moving Circles end
*/


/* 
 ToDo page start
*/
function toDoPage() {

    if (document.getElementById("isChecked").checked) {

        document.getElementById("boxContainerHeader").style.backgroundColor = "#ffffff";

        document.getElementById("addCardButton").style.backgroundColor = "#000000";
        document.getElementById("addCardButton").style.color = "#ffc40d";
        document.getElementById("addCardInfo").style.color = "#000000";

        document.getElementById("buttonRemove").style.backgroundColor = "#000000";
        document.getElementById("buttonRemove").style.color = "#ffc40d";
        document.getElementById("removeCardInfo").style.color = "#000000";

        document.getElementById("dropZoneText1").style.backgroundColor = "#6495db";
        document.getElementById("dropZoneText1").style.color = "#ffc40d";
        document.getElementById("drop1").style.backgroundColor = "#6495db";

        document.getElementById("dropZoneText2").style.backgroundColor = "#7f4faf";
        document.getElementById("dropZoneText2").style.color = "#ffc40d";
        document.getElementById("drop2").style.backgroundColor = "#7f4faf";

        document.getElementById("dropZoneText3").style.backgroundColor = "#72af56";
        document.getElementById("dropZoneText3").style.color = "#ffc40d";
        document.getElementById("drop3").style.backgroundColor = "#72af56";

        document.getElementById("dropZoneText4").style.backgroundColor = "#8e7840";
        document.getElementById("dropZoneText4").style.color = "#ffc40d";
        document.getElementById("drop4").style.backgroundColor = "#8e7840";
    } else {

        document.getElementById("boxContainerHeader").style.backgroundColor = "#000000";

        document.getElementById("addCardButton").style.backgroundColor = "#f5fffa";
        document.getElementById("addCardButton").style.color = "#000000";
        document.getElementById("addCardInfo").style.color = "#ffffff";

        document.getElementById("buttonRemove").style.backgroundColor = "#f5fffa";
        document.getElementById("buttonRemove").style.color = "#000000";
        document.getElementById("removeCardInfo").style.color = "#ffffff";

        document.getElementById("dropZoneText1").style.backgroundColor = "#b5d9e8";
        document.getElementById("dropZoneText1").style.color = "#000000";
        document.getElementById("drop1").style.backgroundColor = "#b5d9e8";

        document.getElementById("dropZoneText2").style.backgroundColor = "#ffa49a";
        document.getElementById("dropZoneText2").style.color = "#000000";
        document.getElementById("drop2").style.backgroundColor = "#ffa49a";

        document.getElementById("dropZoneText3").style.backgroundColor = "#f8ffb9";
        document.getElementById("dropZoneText3").style.color = "#000000";
        document.getElementById("drop3").style.backgroundColor = "#f8ffb9";

        document.getElementById("dropZoneText4").style.backgroundColor = "#aeecb6";
        document.getElementById("dropZoneText4").style.color = "#000000";
        document.getElementById("drop4").style.backgroundColor = "#aeecb6";
    }
}
/* 
 ToDo page end
*/
 

/* 
 MindMap page start
*/
function mindMapPage() {

    if (document.getElementById("isChecked").checked) {

        document.getElementById("mindHeaderText").style.color = "#ffc40D";

        document.getElementById("headerLine").style.backgroundColor = "#ffc40D";

        var elements = document.getElementsByClassName("inputInfoText"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "#ffc40D";
        }

        document.getElementById("boxContainer").style.backgroundColor = "#000000";

        document.getElementById("newField1").style.color = "#ffc40D";
        document.getElementById("newField1").style.backgroundColor = "#0ca9e1";

        document.getElementById("newField2").style.color = "#ffc40D";
        document.getElementById("newField2").style.backgroundColor = "#0ca9e1";

        document.getElementById("newField3").style.color = "#ffc40D";
        document.getElementById("newField3").style.backgroundColor = "#0ca9e1";

        document.getElementById("addButton1").style.color = "#ffc40D";
        document.getElementById("addButton1").style.backgroundColor = "#0ca9e1";

        document.getElementById("addButton2").style.color = "#ffc40D";
        document.getElementById("addButton2").style.backgroundColor = "#0ca9e1";

        document.getElementById("addButton3").style.color = "#ffc40D";
        document.getElementById("addButton3").style.backgroundColor = "#0ca9e1";

        document.getElementById("showIdeaName").style.color = "#ffc40D";

        document.getElementById("ideaText1").style.color = "#ffc40D";
        document.getElementById("showIdea").style.color = "#ffc40D";

        document.getElementById("ideaText2").style.color = "#ffc40D";
        document.getElementById("showIdea1").style.color = "#ffc40D";

        document.getElementById("removeDevInputButton").style.color = "#ffc40D";
        document.getElementById("removeDevInputButton").style.backgroundColor = "#0ca9e1";

        document.getElementById("removeDevInputButton2").style.color = "#ffc40D";
        document.getElementById("removeDevInputButton2").style.backgroundColor = "#0ca9e1";

        
    } else {

        document.getElementById("mindHeaderText").style.color = "#f0f8ff";

        document.getElementById("headerLine").style.backgroundColor = "#ffffff";

        elements = document.getElementsByClassName("inputInfoText"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "#ffffff";
        }

        document.getElementById("boxContainer").style.backgroundColor = "#F2F2E8";

        document.getElementById("newField1").style.color = "#000000";
        document.getElementById("newField1").style.backgroundColor = "#ffffff";

        document.getElementById("newField2").style.color = "#000000";
        document.getElementById("newField2").style.backgroundColor = "#ffffff";

        document.getElementById("newField3").style.color = "#000000";
        document.getElementById("newField3").style.backgroundColor = "#ffffff";

        document.getElementById("addButton1").style.color = "#000000";
        document.getElementById("addButton1").style.backgroundColor = "#dddfe0";

        document.getElementById("addButton2").style.color = "#000000";
        document.getElementById("addButton2").style.backgroundColor = "#dddfe0";

        document.getElementById("addButton3").style.color = "#000000";
        document.getElementById("addButton3").style.backgroundColor = "#dddfe0";

        document.getElementById("showIdeaName").style.color = "#000000";

        document.getElementById("ideaText1").style.color = "#000000";
        document.getElementById("showIdea").style.color = "#000000";

        document.getElementById("ideaText2").style.color = "#000000";
        document.getElementById("showIdea1").style.color = "#000000";

        document.getElementById("removeDevInputButton").style.color = "#000000";
        document.getElementById("removeDevInputButton").style.backgroundColor = "#ffffff";

        document.getElementById("removeDevInputButton2").style.color = "#000000";
        document.getElementById("removeDevInputButton2").style.backgroundColor = "#ffffff";

    }
}
/* 
 MindMap page end
*/

/* 
 Resources page start
*/
function resourcesPage() {

    if (document.getElementById("isChecked").checked) {

        document.getElementById("boxContainer").style.backgroundColor = "#000000";

        var elements = document.getElementsByClassName("box"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#0ca9e1";
        }

        document.getElementById("proInfoTitle").style.color = "#ffc40D";
        document.getElementById("fileUploadTitle").style.color = "#ffc40D";
        document.getElementById("colorTemp").style.color = "#ffc40D";
        document.getElementById("logTitle").style.color = "#ffc40D";
        document.getElementById("qAndA").style.color = "#ffc40D";
        document.getElementById("calendarHeadline").style.color = "#ffc40D";

        document.getElementById("proInfoTextBox").style.color = "#ffc40D";
        document.getElementById("proInfoTextBox").style.backgroundColor = "#000000";

        document.getElementById("fileText1").style.color = "#ffc40D";

        document.getElementById("fileText2").style.color = "#ffc40D";

        document.getElementById("proInfoTextBox").style.color = "#ffc40D";
        document.getElementById("proInfoTextBox").style.backgroundColor = "#000000";

        document.getElementById("logTextBox").style.color = "#ffc40D";
        document.getElementById("logTextBox").style.backgroundColor = "#000000";

        document.getElementById("inputText1").style.color = "#ffc40D";
        document.getElementById("inputText1").style.backgroundColor = "#000000";
        document.getElementById("commentSection").style.color = "#ffc40D";
        document.getElementById("commentSection").style.backgroundColor = "#000000";

        document.getElementById("calendar-container").style.color = "#ffc40D";
        document.getElementById("calendar-container").style.backgroundColor = "#000000";

    } else {

        document.getElementById("boxContainer").style.backgroundColor = "#F2F2E8";

        var elements = document.getElementsByClassName("box"); 
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#dddfe0";
        }

        document.getElementById("proInfoTitle").style.color = "#000000";
        document.getElementById("fileUploadTitle").style.color = "#000000";
        document.getElementById("colorTemp").style.color = "#000000";
        document.getElementById("logTitle").style.color = "#000000";
        document.getElementById("qAndA").style.color = "#000000";
        document.getElementById("calendarHeadline").style.color = "#000000";

        document.getElementById("proInfoTextBox").style.color = "#000000";
        document.getElementById("proInfoTextBox").style.backgroundColor = "#f8f8f8";

        document.getElementById("fileText1").style.color = "#000000";

        document.getElementById("fileText2").style.color = "#000000";

        document.getElementById("logTextBox").style.color = "#000000";
        document.getElementById("logTextBox").style.backgroundColor = "#f8f8f8";

        document.getElementById("inputText1").style.color = "#000000";
        document.getElementById("inputText1").style.backgroundColor = "#f8f8f8";
        document.getElementById("commentSection").style.color = "#000000";
        document.getElementById("commentSection").style.backgroundColor = "#dddfe0";

        document.getElementById("calendar-container").style.color = "#000000";
        document.getElementById("calendar-container").style.backgroundColor = "#f8f8f8";
        
    }
}
/* 
 Resources page end
*/


/* 
 Frontpage start
*/
function frontpage() {

    if (document.getElementById("isChecked").checked) {

    } else {

    }
}
/* 
 Frontpage end
*/


/* 
 My projects page start
*/
function myProjects() {

    if (document.getElementById("isChecked").checked) {

        document.getElementById("logo").src="images/logo_hvitskrift-kopi.png";

    } else {

        document.getElementById("logo"). src="Images/logo_lillaskrift.png"

    }
}
/* 
 My projects page end
*/

/* 
 New project page start
*/
function newProject() {

    if (document.getElementById("isChecked").checked) {
        

    } else {

    }
}
/* 
 New project page end
*/
