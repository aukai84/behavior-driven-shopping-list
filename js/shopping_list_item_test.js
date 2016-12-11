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
  });
  it("should haev property description", () => {
    milk.should.have.property("description")
  });
  it("should have property to show if its done", () => {
    milk.should.have.property("is_done")
  });
  it("should have method check", ()=> {
    milk.check.should.be.a.function
  });
});