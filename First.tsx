// Type: Typescript file: LEARNING THE TYPESCRIPT

let age = 10
//assigning a value to a variable
let number: number
number = 56;//correct 

//number='Hello ' //error (cannot assign the string to number )
//same for the string, boolean, number and other types

//for string 
let name1: string
name1 = 'Hello'
//name1 = 10 //error

// we can assing the either types to the variable for eg.
let testStringOrNumber: string | number // must use ':' instead of '=' for defining the types.
testStringOrNumber = 'Hello'
testStringOrNumber = 20
//other than this types we get errors
//if we try to assign the boolean or arrays value to the variable we get for eg.
//testStringOrNumber = true //error 
// testStringOrNumber = [1,2,3] //error 


//for arrays
let arr1 = ['ashish', 'sabal', 'sagar', 'kishney']  // the types automatically defined this array as string array 
//if we want to push boolean or number type to the array we get error

arr1.push('Hello') //correct
//arr1.push(10) //throws error


//lets assgin the array type to the variable

let arr2: string[]// this define the array of string type
let arr3: number[]// this define the array of number type
let arr4: boolean[]// this define the array of boolean type

let arrCombine: (string | number | boolean)[]// this define the combine array the accept the strings, numbrs and boolean 

// for eg
arrCombine = [true, '10', 20, false] //correct



// for objeccts
let object1 = {
    name: 'ashish',
    age: 20,
    isLoggedin: true
}// for this the typescript automatically understand the types of the objects 


object1.name = 'sagar' //correct
object1.age = 30 //correct
// object1.name=true//error throws 


//lets defint the types for the object
let object2: {
    name: string,
    age: number,
    isLoggedin: boolean
    phone: number
}

// here we define our own types for the objects 
//object2.age=20 // this throws error because we have not assigned the value to the object2 so for this we have to assign the value to the object2

object2 = {
    name: 'ashish',
    age: 20,
    isLoggedin: true,
    phone: 1234567890

}// we should provide every value to the object2 otherwise it throws error 
// object2={
//     name:'sagar',
//     age:30,
//     isLoggedin:false,

// }//inncorrect because the value is mising in the object2
