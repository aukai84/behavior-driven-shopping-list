/*jshint esversion: 6 */
const should = chai.should();
const expect = chai.should();



describe("ShoppingListItem", () => {
  let milk;

  beforeEach(() => {
    milk = new ShoppingListItem("Milk", "Good with cookies");
  });
  it("should be a class", () => {
    milk.should.be.a.function
  });
  it("should have a name property", () => {
    milk.should.have.property("name")
    milk.name.should.be.a("string")
  });
  it("should have property description", () => {
    milk.should.have.property("description")
    milk.description.should.be.a("string")
  });
  it("should only have two parameters", () => {
    console.log(milk)
    milk.constructor.should.have.length(2)
  })
  it("should have property to show if its done", () => {
    milk.should.have.property("is_done")
    milk.is_done.should.equal(false)
  });
  it("should have method check", ()=> {
    milk.check.should.be.a.function
    milk.check();
    milk.is_done.should.equal(true)
  });
  it("should have a method uncheck", ()=> {
    milk.uncheck.should.be.a.function
    milk.uncheck()
    milk.is_done.should.equal(false)
  });
  it("should have a method render", () => {
    milk.render.should.be.a.function
    milk.render().should.be.a("string")
    //will come back to render in the future
  });
});

describe("ShoppingList", () => {
  let list;
  let eggs;
  beforeEach(() => {
    list = new ShoppingList();
    eggs = new ShoppingListItem("Eggs", "Yolkie");
  });
  it("should be a class", () => {
    list.should.be.a.function
  });
  it("should have an items property", () => {
    list.should.have.property("items")
  });
  it("should not pass through any paremeters", () => {
    list.constructor.should.have.length(0)
  });
  it("items should be an array", () => {
    list.items.should.be.an("array")
  });
  it("items array should be empty", () => {
    list.items.length.should.equal(0)
  });
  it("should have method addItem", () => {
    list.addItem.should.be.a.function
  });
  it("should have an argument that is a ShoppingListItem and adds it to list", () => {
   // var result = list.addItem("aukai");
   // console.log(result);
    list.addItem(eggs);
    console.log(list.items[0]);
    list.items.should.contain(eggs);
  });
  it("should have method removeItem", () => {
    list.removeItem.should.be.a.function
  });
  it("should remove the last item if no argument is passed", () => {
    let bacon = new ShoppingListItem("Bacon", "Crispy");
    list.addItem(eggs);
    list.addItem(bacon);
    list.removeItem();
    list.items.should.not.contain(bacon);
  });
  it("should should have ShoppingListItem argument that removes it from list", () => {
    let bacon = new ShoppingListItem("Bacon", "So Gooood");
    list.addItem(bacon);
    list.addItem(eggs);
    list.removeItem(bacon);
    list.items.should.not.contain(bacon);
  });
});