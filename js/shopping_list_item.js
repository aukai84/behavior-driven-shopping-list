/*jshint esversion: 6 */
var nonString;
class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
    this.check = function(){
      this.is_done =true;
    };
    this.uncheck = function(){
      this.is_done = false;
    };
    this.render = function(){
      //return `<li class='completed_${this.is_done}'><span>${this.name}</span><span>${this.description}</span></li>`;

      let listItem = document.createElement('li');
      listItem.className = `completed_${this.is_done}`;

      let checkBox = document.createElement('input');
      checkBox.className = this.description;
      checkBox.type = "checkbox";
      listItem.appendChild(checkBox);
      let index = myShoppingList.items.indexOf(this);
      //checkBox.addEventListener("change", () => {changeCheckedStatus(index, checkBox)});

      let nameSpan = document.createElement('span');
      nameSpan.innerHTML = this.name;
      listItem.appendChild(nameSpan);

      let descriptionSpan = document.createElement('span');
      descriptionSpan.innerHTML = this.description;
      listItem.appendChild(descriptionSpan);



      let removeButton = document.createElement('button');
      removeButton.className = "remove_item_button";
      removeButton.addEventListener("click", () => {removeItemButtonClicked(index)});
      removeButton.innerHTML = "X";
      listItem.appendChild(removeButton);

      return listItem.outerHTML;


    };
  }
}

