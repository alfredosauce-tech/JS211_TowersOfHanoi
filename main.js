'use strict';
//this is test comment
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
 // console.log("this is move piece"+ startStack)
  //console.log("this is move piece"+ endStack)
  //function is gonna move element from one array to another
//console.log("this is a test:")

let element=stacks[startStack].pop()
stacks[endStack].push(element)
  // Your code here
  console.log ("Immoving")

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  let element1=stacks[startStack]
  let element2=stacks[endStack]
  
  if (element2.length===0){
  return true
    }  else if (element1[element1.length-1] < element2[element2.length-1]){
      console.log ("this move is legal")
      return true 

    } else{
      console.log ("this move is illegal")
      return false 
    }
}
  
  


  // Your code here
  //make sure end element is not smaller than the piece being moved



// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if(stacks.b.length===4) {
    return true 
  } 
  else{
    return false 
  }
  // Your code here
  //checks if C stack has all the rings

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
    checkForWin()
  }
    
  
  // Your code here
//movePiece(startStack, endStack)

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
