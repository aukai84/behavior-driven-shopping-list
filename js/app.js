/* jshint esversion: 6 */
let myShoppingList = new ShoppingList();
const contentContainer = document.getElementById("content");
contentContainer.innerHTML = myShoppingList.render();

const itemNameBox = document.getElementById("itemName");
const itemDescriptionBox = document.getElementById("itemDescription");

function add_to_shopping_list(event){

  let itemName = itemNameBox.value;
  let itemDescription = itemDescriptionBox.value;

  let new_shopping_list_item = new ShoppingListItem(itemName, itemDescription);
  myShoppingList.addItem(new_shopping_list_item);
  contentContainer.innerHTML = myShoppingList.render();

  assignEvents();

  itemNameBox.value = '';
  itemDescriptionBox.value = '';
}



function changeCheckedStatus(idx, checkbox){
  if(checkbox.checked === true){
    myShoppingList.items[idx].check();
  } else if(checkbox.checked === false){
    myShoppingList.items[idx].uncheck();
  }
}

function removeItemButtonClicked(idx){

  myShoppingList.removeItem(myShoppingList.items[idx]);
  contentContainer.innerHTML = myShoppingList.render();

  assignEvents();
}

function assignEvents() {
  let removeButtons = document.querySelectorAll(".remove_item_button");
  let checkInputs = document.querySelectorAll(".check-box");
  let listItems = document.querySelectorAll("li");
  console.log(listItems)
  for(let i = 0; i < listItems.length; i++){
    removeButtons[i].addEventListener("click", () => {
      removeItemButtonClicked(i);
    });
    checkInputs[i].addEventListener("change", () => {
      changeCheckedStatus(i, checkInputs[i]);
    });
    if(myShoppingList.items[i].is_done === true){
      checkInputs[i].checked = true;
    }
  }
}