/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:
function one(num1,num2){
    return (num1+ num2)*2  
}
let num1= Math.floor(Math.random()*15)+1
let num2= Math.floor(Math.random()*15)+1
let numbers=[num1,num2]
for (let i =2; numbers.length<10;i++){
let two= one(numbers[i-2],numbers[i-1])
numbers.push(two)

}
console.log(numbers)
 
