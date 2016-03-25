
var todoListBody = document.getElementById("list");
var input = document.getElementById("textfield");

// Buttons 

var addButton = document.getElementById("addItem");
var changeButton = document.getElementById("changeItem")
var removeButton = document.getElementById("removeItem");

// Select item in variable
var selectItem = null;


// Add item:

addButton.addEventListener("click", addItem);

function addItem(e){
	console.log(e);

	if(input.value){

		var tr = document.createElement("TR");
		var td = document.createElement("TD");

		function clickedItem(){
			if(selectItem == this){
				selectItem.setAttribute("class", "removeColor");
				selectItem = null;
			} else {
				if(selectItem){
					selectItem.setAttribute("class", "removeColor");
				}
				selectItem = this;
				this.setAttribute("class", "setColor");

			}

		}

		td.addEventListener("click", clickedItem);

		var text = input.value;

		td.innerHTML = text;

		tr.appendChild(td);

		list.appendChild(tr);

		input.value = "";

	}
}


// Remove item:

removeButton.addEventListener("click", removeItem);

function removeItem(){

	var tr = document.getElementsByTagName("tr");

	function clickedItem(){
		selectItem = this.innerHTML;
		console.log(this.innerHTML);
	}
}

/*
// Change item:

changeButton.addEventListener("click", changeItem);

function changeItem(){

	var changeTD = document.getElementById("TD");

	var text = input.value;

	td.innerHTML = text;
	
}

*/