/*jshint esversion: 6 */
class ShoppingList {
  constructor(){
    this.items = [];
  }
  addItem(item){
    if(item instanceof ShoppingListItem){
    this.items.push(item);
    } else {
      throw Error("Cannot add item that isn't a shopping list item");
   }
  }
  removeItem(item){
    if(arguments.length === 0){
      this.items.pop();
    } else if(item instanceof ShoppingListItem){
      if(this.items.indexOf(item) > -1){
      this.items.splice(this.items.indexOf(item), 1);
      } else {
        throw Error("Cannot remove item not on your list");
      }
    } else {
      throw Error("Cannot remove item that isn't a shopping list item");
    }
  }

}
