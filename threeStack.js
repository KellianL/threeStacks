class ThreeStack {
  constructor() {
    this.stack = [];
  }

  /**
   * Push the object to the stack specified in argument .
   * @param stackname - The stack you want to push to.
   * @param object - The object you want to push to the stack.
   */
  push(stackname, object) {
    const temp = this.countStackItems(stackname - 1);
    this.stack[(stackname - 1) + temp[0] * 3] = object;
  }
  /**
   * The function takes a stackname as an argument and returns the value of the top item in the stack
   * @param stackname - The stack you want to pop from.
   * @returns The value of the item being popped off the stack.
   */
  pop(stackname) {
    const temp = this.countStackItems(stackname - 1);
    if (temp[0] <= 0 || stackname >3 || stackname < 0) {
      throw new Error("Stack empty or stackname incorrect");
    }
    const value = this.stack[temp[1]];
    delete this.stack[temp[1]];
    return value;
  }
  /**
   * It returns the number of items in the stack and the index of the last item in the stack
   * @param stackid - the index of the stack in the stack array
   */
  countStackItems(stackid){
    const len = this.stack.length;
    let nbOfItemInTheStack = 0;
    let valueindex ;
    for (let i = stackid; i <= len; i=stackid + nbOfItemInTheStack *3 ){
      if(typeof this.stack[i] ==='string'){
        nbOfItemInTheStack++;
        valueindex = i;
      }
      else{break;}
    }
    return [nbOfItemInTheStack, valueindex]
  }
}

const threeStack = new ThreeStack();

threeStack.push(1, '{name:"object1"}');
threeStack.push(1, '{name:"object2"}');
threeStack.push(2, '{name:"object3"}');
threeStack.push(2, '{name:"object4"}');
threeStack.push(2, '{name:"object5"}');
threeStack.push(3, '{name:"object6"}');
threeStack.push(3, '{name:"object7"}');

console.log(threeStack.pop(2)); // display {name:"object5"}
console.log(threeStack.pop(2)); // display {name:"object4"}
console.log(threeStack.pop(1)); // display {name:"object2"}
console.log(threeStack.pop(1)); // display {name:"object1"}
console.log(threeStack.pop(3)); // display {name:"object7"}
console.log(threeStack.pop(1)); // throw Exception
console.log(threeStack.pop(4)); // throw Exception
