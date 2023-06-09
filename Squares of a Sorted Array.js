// Problem Statement:- Squares of a Sorted Array
/* Description: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

*/ 

// My Solution
var sortedSquares = function(nums){
// Here we need to square each value of an array and push into array.
let root =[] // Empty Array
//We need to traverse each value of Array using for loop.
for(let i=0;i<nums.length;i++){
// Need to push square value in root blank array
//Square value nums[i]*nums[i]
root.push(nums[i]*nums[i]);
}
// We got the array now sort in ascending.
 return root.sort(function(a,b){return a-b});
};

