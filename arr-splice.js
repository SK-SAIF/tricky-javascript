const numbers=[23,345,68,34,46,78,5,425];

// const removed=numbers.splice(2,3);//splice(the starting position,from the starting position how many elements are to be deleted)....this is more important

// console.log(removed);
// console.log(numbers);//after splicing the main array also gets changed.

const removed2=numbers.splice(2,3,35,45,23); // it will remove from index-2 to the next three elements but at their position it will append the elements 35,45,23..
console.log(removed2);
console.log(numbers);

