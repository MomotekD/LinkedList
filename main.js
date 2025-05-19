import { Node, LinkedList } from "./linkedList.js"

const list = new LinkedList();

list.append('cat');
list.append('dog');
list.append('turtle');

list.prepend('snake');
list.prepend('hamster');
list.prepend('lizard');

console.log('string: ', list.toString());

console.log('size: ', list.size());

console.log('head: ', list.getHead());
console.log('tail: ', list.getTail());

console.log('atIndex: ', list.atIndex(2));

console.log('deleted: ', list.pop());
console.log('string: ', list.toString());

console.log('contains: ', list.contains('monkey'));
console.log('contains: ', list.contains('lizard'));

console.log('find: ', list.find('lizard'));
console.log('find: ', list.find('elephant'));

console.log('insertAt: ', list.insertAt('crocodile', 3));

console.log('string: ', list.toString());

console.log('removeAt: ', list.removeAt(1));

console.log('string: ', list.toString());