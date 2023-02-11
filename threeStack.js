class ThreeStack {
  constructor() {
    this.stack = [];
    this.nbOfItemsInEachStacks = [0, 0, 0];
    Object.seal(this.nbOfItemsInEachStacks);
  }

  push(stackname, object) {
    const stackid = stackname - 1;
    this.stack[stackid + this.nbOfItemsInEachStacks[stackid] * 3] = object;
    this.nbOfItemsInEachStacks[stackid]++;
  }
  pop(stackname) {
    const stackid = stackname - 1;
    const nbOfItemInTheStack = this.nbOfItemsInEachStacks[stackid];
    if (nbOfItemInTheStack <= 0 || stackname >3 || stackname < 0) {
      throw new Error("Stack empty or stackname incorrect");
    }
    const valueindex = stackid + (nbOfItemInTheStack - 1) * 3;
    const value = this.stack[valueindex];
    delete this.stack[valueindex];
    this.nbOfItemsInEachStacks[stackid]--;
    for (var i = this.stack.length - 1; i >= 0; i--){
      if(typeof this.stack[i] !== 'string'){
        this.stack.splice(i);
      }
      else{
        break;
      }
    }
    return value;
    
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
