//  * Exercise 1: 
//  * 
//  * Make an array of numbers that are doubles of the first array
//  *
//  * Test Case: 
//  *
//  * console.log(doubleNumbers([2, 5, 100]));
//  * 
//  * Result:
//  * [4, 10, 200]


function doubleNumbers(array){  
    let double = array.map(element=>element*2);  
    return double;  
    }  
      
    console.log(doubleNumbers([2, 5, 100]))  



    // * Exercise 2 : 
    // * 
    // * Take an array of numbers and make them strings
    // *
    // * Test Case: 
    // *
    // * console.log(stringItUp([2, 5, 100]));
    // * 
    // * Result:
    // * ["2", "5", "100"]

    function stringItUp(array){  
        let stringArray = array.map(String);  
        return stringArray;  
        }  
          
        console.log(stringItUp([2, 5, 100]));  


// * Exercise 3:  
//  * 
//  * Capitalize each of an array of names
//  *
//  * Test Case: 
//  *
//  * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
//  * 
//  * Result:
//  *  ["John", "Jacob", "Jingleheimer", "Schmidt"]

function capitalizeNames(array){  
    let newArray=array.map(function(string){  
    return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase();  
    })  
    return newArray 
    }  
      
    console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));  




//     * Exercise 4:  
//  * 
//  * Make an array of strings of the names
//  *
//  * Test Case: 
//  *
//  * console.log(namesOnly([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  *   ])); 
//  * 
//  * Result:
//  *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
function namesOnly(array){  
    let onlyNames = array.map(element=>element.name);  
    return onlyNames;  
    }  
      
    console.log(namesOnly([  
    { name: "Angelina Jolie", age: 80 },  { name: "Eric Jones", age: 2  },  {  name: "Paris Hilton", age: 5 }, {  name: "Kayne West", age: 16 },{name: "Bob Ziroll", age: 100 } ]));  



//  Exercise 5:  
//  * 
//  * Make an array of strings of the names saying whether or not they can go to The Matrix
//  *
//  * Test Case: 
//  *
//  * console.log(makeStrings([
//  *    {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ]));  

// let array=[{ name: "Angelina Jolie", age: 80 },  { name: "Eric Jones", age: 2  },  {  name: "Paris Hilton", age: 5 }, {  name: "Kayne West", age: 16 },{name: "Bob Ziroll", age: 100 } ];
    
    function Strings(array){  
    let newArray = array.map(array =>{  
    if(array.age>=18){  
        return  array.name + ' can go to The Matrix'  ;
        
    }else {  
        return  array.name + " is under age!!";  
       
    } 
   
    })  
    return newArray
    }  

    console.log(Strings([{ name: "Angelina Jolie", age: 80 },  { name: "Eric Jones", age: 2  },  {  name: "Paris Hilton", age: 5 }, {  name: "Kayne West", age: 16 },{name: "Bob Ziroll", age: 100 } ]))






    

// Exercise 6:  
//  * 
//  * Make an array of the names in h1s, and the ages in h2s
//  *
//  * Test Case: 
//  *
//  * console.log(readyToPutInTheDOM([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ])); 

function readyToPutInTheDOM(array){ 

    let newArray2 = array.map(array =>{  
     return '<h1>'+array.name+'</h1>'+"<h2>"+array.age+'</h2>';
    })  
    return newArray2;
    }  
 console.log(readyToPutInTheDOM([{ name: "Angelina Jolie", age: 80 },  { name: "Eric Jones", age: 2  },  {  name: "Paris Hilton", age: 5 }, {  name: "Kayne West", age: 16 },{name: "Bob Ziroll", age: 100 } ])) ; 



// * Exercise 7:
// * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Cases:
// *   Test Case 1:  doubleValues([1,2,3]) 
// *   Test Case 2:  doubleValues([1,-2,-3])  
// *
// * Result:
// * Test Case 1: [2,4,6] 
// * Test Case 2: [2,-4,-6]
// */        


function doubleValues(array) {
    return array.map(element => element * 2);
  }
    
 console.log(doubleValues([1,2,3]));


//  * Exercise 8:
//   * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
//   *
//   *
//   * Test Cases :
//   *   Test Case 1:  valTimesIndex([1,2,3])  
//   *   Test Case 2:  valTimesIndex([1,-2,-3]) 
//   * 
//   * Result
//   * Test Case 1: [0,2,6]
//   * Test Case 2: [0,-2,-6]
//   */


function valTimesIndex(array) {
    return array.map((element, i) => element * i);
  }
  console.log(valTimesIndex([1,2,3]));


//   * Exercise 9:
//   * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
//   * of that key in each object.
//   * 
//   * Test Case:
//   * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
//   * 
//   * Result:
//   * ['Elie', 'Tim', 'Matt', 'Colt']
//   */
//   * Exercise 10:
//   * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
//   * 
//   * Examples:
//   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
//   */


function extractKey(array, key) {
    return array.map(element => element[key]);
  }
  console.log(  extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));



//   * Exercise 10:
//   * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
//   * 
//   * Examples:
//   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
//   */


function extractFullName(array) {
    return array.map(val => val.first + ' ' + val.last);
  }
  
  console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]))
  




//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

let number = [1,8,6,4,5];
let newNum = number.filter(evenOnly);
function evenOnly(n){
    return n%2==0
}
console.log(newNum)


/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

let number2 = [1,8,6,4,10,18];
let newNum2 = number2.filter(multiFour);
function multiFour(n){
    return n%4 == 0
}
console.log(newNum2)


/*
12
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(array1,ch){

let array2 = array1.filter(multiFour);
function multiFour(n){
    return n.includes(ch)?true:false
   }   return array2
}
console.log(containChar(["hello","world"],"l"))
console.log(containChar(["hello","world"],"e"))



/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arrayx){

let arrayy = arrayx.filter(multiFour);
function multiFour(n,index){
if(n.length%2!==0 && n.indexOf(n[index])%2==0){
    return n
}
}
return arrayy
}console.log(evenIndexOddLength(["alex","mercer","madrasa","rashdd","emad","hdala"]))


/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/


function olderThan(persons,n){
    let old=persons.filter(item => 
        item.age > n);
         return old;
  }
console.log(olderThan([ { first: 'ahmed',last:'khalel',age:20}, {first: 'waleed',last:'khalel',age:70 },{first: 'wafa',last:'khalel',age:68 },{first: 'waell',last: 'Hassan',age:20 },{first: 'waleed',last: 'zain',age:100 }], 66 ));



//     15
// Create a function called shorterThan
// that accept an array of strings and a number
// and return the shorter string than the number

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterThan(strings,5) => ["alex","emad","hala"]
// */


function shorterThan(st,n){

    let st1 = st.filter(element =>{

    if(element.length<n){
        return element
    }
    })
    return st1
    }console.log(shorterThan(["alex","mercer","madrasa","rashdd","emad","hdala"],6))