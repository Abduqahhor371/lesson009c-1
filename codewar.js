// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
   }


//    Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    let smallest = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < smallest) {
              smallest = arr[i];
          }
      }
      return smallest;
  }

//   Note: This kata is inspired by Convert a Number to a String!. Try that one too.

const stringToNumber = function(str){
    return Number(str);
  }

//   Summation
var summation = function (num) {
    let sum = 0;
      for (let i = 1; i <= num; i++) {
          sum += i;
      }
      return sum;
  }

//   Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
  }