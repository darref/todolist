//creation de la div principale
let mainDiv = document.createElement("div");
mainDiv.style.width = "50%";
mainDiv.style.height = "70%";
mainDiv.style.textAlign = "center";
//ajout du titre
let title = document.createElement("h1");
title.innerText = "My todos";
title.style.fontSize = "100px";
document.body.appendChild(title);
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "row";
//creation et ajout de la barre de text input
let inputBox = document.createElement("input");
inputBox.style.width = "80%";
//ajout de la div input conteneur
let divInputConteneur = document.createElement("div");
divInputConteneur.appendChild(inputBox);
let saveButton = document.createElement("button");
saveButton.innerText = "Save";
divInputConteneur.appendChild(saveButton);
//ajout de la UL des taches
let ulTasks = document.createElement("ul");
//event listener du bouton
saveButton.addEventListener( "click"  , (e1) => 
{
  if(inputBox.value.length > 3)
  {
    let newTask = document.createElement("div");
    let taskText = inputBox.value;
    inputBox.value = "";
    //
    newTask.style.width = "100%";
    newTask.style.border = "2px solid black";
    //
    let newLI = document.createElement("li");
    newLI.innerText = taskText;
    newLI.style.border = "1px gray solid"
    newLI.style.margin = "20px"
    //ajout de la checkbox a la nouvelle li
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newLI.append(newCheckbox);
    //ajout du bouton remove a la new li
    let boutonRemove = document.createElement("button");
    boutonRemove.innerText = "Remove Task";

    boutonRemove.addEventListener("click" , (e2)=>
    {
      newLI.remove();
    });

    newLI.append(boutonRemove);
    //
    ulTasks.append(newLI);
  }
  
});
//ajout final
mainDiv.appendChild(title);
mainDiv.appendChild(divInputConteneur);
mainDiv.appendChild(ulTasks);
document.body.appendChild(mainDiv);