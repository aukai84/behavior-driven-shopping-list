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
  addItem(ShoppingListItem){}
}

