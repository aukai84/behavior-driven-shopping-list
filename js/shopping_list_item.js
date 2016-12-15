/*jshint esversion: 6 */
class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done =true;
  }

  uncheck(){
    this.is_done = false;
  }

  render(){
      //return `<li class='completed_${this.is_done}'><span>${this.name}</span><span>${this.description}</span></li>`;

      let listItem = document.createElement('li');
      listItem.className = `completed_${this.is_done}`;

      let checkBox = document.createElement('input');
      checkBox.className = "check-box";
      checkBox.type = "checkbox";
      listItem.appendChild(checkBox);

      let nameSpan = document.createElement('span');
      nameSpan.innerHTML = this.name;
      listItem.appendChild(nameSpan);

      let descriptionSpan = document.createElement('span');
      descriptionSpan.innerHTML = this.description;
      listItem.appendChild(descriptionSpan);



      let removeButton = document.createElement('button');
      removeButton.className = "remove_item_button";
      removeButton.innerHTML = "x";
      listItem.appendChild(removeButton);

      return listItem.outerHTML;
  }
}


