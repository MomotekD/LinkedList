import { Node, LinkedList } from "./linkedList.js"

const list = new LinkedList();

list.append('cat');
list.append('dog');
list.append('turtle');

list.prepend('snake');
list.prepend('hamster');
list.prepend('lizard');

console.log(list.toString());

console.log(list.size());

console.log(list.getHead());
console.log(list.getTail());

console.log(list.atIndex(2));

console.log(list.pop());
console.log(list.toString());