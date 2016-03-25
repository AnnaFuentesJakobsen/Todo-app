
var todoList = document.getElementById("todoListBody");
var input = document.getElementById("textfield");

var finishedList = document.getElementById("finishedListBody");

// Get Buttons:

var addButton = document.getElementById("addItem");


// Add item:

addButton.addEventListener("click", addItem);

function addItem(e){
	console.log(e);


	if(input.value){
		var div = document.createElement("DIV");
		var tr = document.createElement("TR");
		var td = document.createElement("TD");

		var text = input.value;

		div.innerHTML = text;

		td.appendChild(div);

		tr.appendChild(td);

		todoList.appendChild(tr);

		input.value = "";

		// --- BUTTONS ---

		// Marked as Done:
		var doneBtn = document.createElement("BUTTON");
		var doneText = document.createTextNode("Done");

		doneBtn.appendChild(doneText);
		td.appendChild(doneBtn);

		var divContent = doneBtn.previousSibling;


		doneBtn.addEventListener("click", taskDone);

		// Get content from div:

			function taskDone(){

				var createTr = document.createElement("TR");
				var createTd = document.createElement("TD");

				createTd.innerHTML = divContent.innerHTML;

				console.log(divContent.innerHTML);

				createTr.appendChild(createTd);

				finishedListBody.appendChild(createTr);	

				console.log(createTr);			

				// Add remove-button:
				var removeBtn = document.createElement("BUTTON");
				var removeText = document.createTextNode("Remove Item");
				
				removeBtn.appendChild(removeText);
				createTr.appendChild(removeBtn);

				removeBtn.addEventListener("click", removeItem);

				// Remove buttons from todo-list:
				todoList.removeChild(tr);

			}

		// Change:
		var changeBtn = document.createElement("BUTTON");
		var changeText = document.createTextNode("Change Item");

		changeBtn.appendChild(changeText);
		td.appendChild(changeBtn);

		//console.log(changeBtn.previousSibling.previousSibling.innerHTML);

		changeBtn.addEventListener("click", changeItem);

		// Remove:
		var removeBtn = document.createElement("BUTTON");
		var removeText = document.createTextNode("Remove Item");

		removeBtn.appendChild(removeText);
		td.appendChild(removeBtn);

		removeBtn.addEventListener("click", removeItem);
		

	}
}
// Finished Task:


// Change item:

function changeItem(){

	this.previousSibling.previousSibling.contentEditable = true;
	console.log(this.previousSibling.previousSibling.innerHTML);
	this.previousSibling.previousSibling.focus();
}

// Remove item:

function removeItem(){

		this.parentNode.parentNode.removeChild(this.parentNode);
		
}




