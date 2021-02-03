const number=[2,3,4,5];

// const result=number.map(function(element){
//     return element*element;
// })
// console.log(result);

// const square=num=>num*num;
// const result=number.map(square);
// console.log(result);

const result=number.map(num=>num*num);
console.log(result);

const y=number.filter(x => x > 0);//filter just filters the array which is matched with the condition inside it.
console.log(y);

const z=number.find(x=> x>0);//find the very first number of the given condition..also we can say that after filtering an array with the given condition "find" finds the first element of the filtered array
console.log(z);