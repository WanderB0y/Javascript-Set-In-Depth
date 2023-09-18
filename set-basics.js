// set constructor function

const mySet = new Set();

console.log(mySet)

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);

mySet.add(10);
mySet.add(10);
mySet.add(10);

// won't work because would'nt allow a duplicate value
console.log(mySet)

mySet.add("10");

console.log(mySet);

mySet.delete("20");

console.log(mySet.has(10));

console.log(mySet.has(300));