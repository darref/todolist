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
saveButton.addEventListener( "click"  , () => 
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
    //
    let newLIText = document.createElement("p");
    newLIText.innerText = taskText;
    newLIText.style.paddingLeft = "50px";
    newLIText.style.paddingRight = "50px";
    //
    newLI.style.border = "1px gray solid"
    newLI.style.margin = "20px"
    //ajout de la checkbox a la nouvelle li
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newLI.append(newCheckbox);
    ulTasks.append(newLI);
    //
    newLI.append(newLIText);
    //ajout du bouton remove a la new li
    let boutonRemove = document.createElement("button");
    boutonRemove.innerText = "Remove Task";

    boutonRemove.addEventListener("click" , ()=>
    {
      newLI.remove();
    });

    newLI.append(boutonRemove);
    boutonRemove.style.textAlign = "right";
    //
    newLI.style.textAlign = "justify";
    newLI.style.padding = "20px";
    //
    newLI.style.display = "flex";
    newLI.style.flexDirection = "columns";
    // 
    
  }
  
});
//ajout final
mainDiv.appendChild(title);
mainDiv.appendChild(divInputConteneur);
mainDiv.appendChild(ulTasks);
document.body.appendChild(mainDiv);