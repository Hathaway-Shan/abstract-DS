class Stack {}

class Queue {}

class MyDataStructure {
  constructor(initialList) {
    //adding # in front makes this a private variable only accessible in the class itself
    this.#list = initialList;
  }
  //adding this will let us see the private variable it will not work without the get
  get list() {
    return this.#list;
  }
  static describeClass() {
    console.log("this is a custom Data Structure");
  }
}

const myStructure = new MyDataStructure([1, 2, 3]);
console;

module.exports = { Stack, Queue };
