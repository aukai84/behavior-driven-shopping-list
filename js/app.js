/* jshint esversion: 6 */
let myShoppingList = new ShoppingList();
document.getElementById("content").innerHTML = myShoppingList.render();


function add_to_shopping_list(){

  let itemName = document.getElementById("itemName").value;
  let itemDescription = document.getElementById("itemDescription").value;

  let new_shopping_list_item = new ShoppingListItem(itemName, itemDescription);
  myShoppingList.addItem(new_shopping_list_item);
  document.getElementById("content").innerHTML = myShoppingList.render();

  var test = document.getElementsByClassName(itemDescription);
  console.log(test);
  test.addEventListener("click", () => {
    removeItemButtonClicked(myShoppingList.items.indexOf(new_shopping_list_item));
  });
}



function changeCheckedStatus(idx, checkbox){

  if(checkbox.checked === true){
    console.log(checkbox.checked);
    myShoppingList.items[idx].checked();
  } else if(checkbox.checked === false){
    myShoppingList.items[idx].uncheck();
  }
}

function removeItemButtonClicked(idx){

  myShoppingList.removeItem(myShoppingList.items[idx]);
  document.getElementById("content").innerHTML = myShoppingList.render();
}