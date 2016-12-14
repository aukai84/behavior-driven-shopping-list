/* jshint esversion: 6 */
let myShoppingList = new ShoppingList();
document.getElementById("content").innerHTML = myShoppingList.render();


function add_to_shopping_list(){

  let itemName = document.getElementById("itemName").value;
  let itemDescription = document.getElementById("itemDescription").value;

  let new_shopping_list_item = new ShoppingListItem(itemName, itemDescription);
  myShoppingList.addItem(new_shopping_list_item);
  document.getElementById("content").innerHTML = myShoppingList.render();

 let removeItems = document.querySelectorAll(".remove_item_button");
  for(let i = 0; i < removeItems.length; i++){
    console.log(removeItems[i]);
    removeItems[i].addEventListener("click", () => {
      removeItemButtonClicked(i);
    });
  }


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
console.log(idx)
  console.log(myShoppingList.items[idx])
  myShoppingList.removeItem(myShoppingList.items[idx]);
  document.getElementById("content").innerHTML = myShoppingList.render();

  let removeItems = document.querySelectorAll(".remove_item_button");
  for(let i = 0; i < removeItems.length; i++){
    console.log(removeItems[i]);
    removeItems[i].addEventListener("click", () => {
      removeItemButtonClicked(i);
    });
  }

  console.log(myShoppingList.items)
}