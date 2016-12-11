/*jshint esversion: 6 */
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
    this.render = function(){return "testing";};
  }
}

class ShoppingList {
  constructor(){
    this.items = [];
  }
  addItem(item){
    if(item instanceof ShoppingListItem){
    this.items.push(item);
    } else {
      throw Error("Not an item in your list");
   }
  }
}

var list = new ShoppingList();
var bacon = new ShoppingListItem("Bacon", "Good");

