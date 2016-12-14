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
    } else if(this.items.indexOf(item) > -1){
      this.items.splice(this.items.indexOf(item), 1);
      } else {
        throw Error("Cannot remove item not on your list");
      }

  }
  render(){
    let newList = '';
    for(var i = 0; i < this.items.length; i ++){
      newList += this.items[i].render();
    }
    return `<ul>${newList}</ul>`;
  }

}
