const mynumber = [1,2,3,4,5,6,7,8,9,10];

const double = mynumber.map(item=> item*2)
console.log(double);

//filter method it is used to serch the items in the existing in the array
// finally it will returns new arry

  const evennumber = mynumber.filter(item=> item % 2 === 0)
  console.log(evennumber); 

// slice=> fetching in bw elements 1 to 4
const result = evennumber.slice(2,10)
console.log(result)

//concat()=> comine two or more arry

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newarray = array1.concat(array2);
console.log(newarray)  


//array using strings 
 
 const mystr ="apple,banana,grapes,lemon ";
 const list = mystr.split(", ")
 
 const capitalized  = list.map(fruit=> fruit.charAt(0).toLocaleUpperCase)

 console.log(); 
