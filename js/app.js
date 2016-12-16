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
  console.log(checkbox.checked);
  if(checkbox.checked === true){
    myShoppingList.items[idx].check();
    console.log(myShoppingList.items[idx]);
  } else if(checkbox.checked === false){
    myShoppingList.items[idx].uncheck();
    console.log(myShoppingList.items[idx]);
  }
}

function removeItemButtonClicked(idx){

  myShoppingList.removeItem(myShoppingList.items[idx]);
  document.getElementById("content").innerHTML = myShoppingList.render();

  assignEvents();
}

function assignEvents() {
  let removeItems = document.querySelectorAll(".remove_item_button");
  let checkItems = document.querySelectorAll(".check-box");
  for(let i = 0; i < removeItems.length; i++){
    removeItems[i].addEventListener("click", () => {
      removeItemButtonClicked(i);
    });
    checkItems[i].addEventListener("change", () => {
      changeCheckedStatus(i, checkItems[i]);
    });
    if(myShoppingList.items[i].is_done === true){
      checkItems[i].checked = true;
    }
  }
}