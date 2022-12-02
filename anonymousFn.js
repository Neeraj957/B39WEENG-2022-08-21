//	Do the below programs in anonymous function
// 1.	Print odd numbers in an array

var oddNumbers = function (num) {
    for (var i of num) {
      if (i % 2 !== 0) {
         console.log(i);
      }
   }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
oddNumbers(arr);

// 2.	Convert all the strings to title caps in a string array

var TitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i in str) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);   
    }
    console.log(str.join(' '));
    }
    
    var arr1 = 'Guvi Geek';
    TitleCase(arr1);

// 3.	Sum of all numbers in an array

var Addition = function (array) {
    
    var sum = 0;

for (var i in array) {

sum = sum + array[i];
}

console.log(sum);

}

var arr2 = [1, 2, 3, 4, 5];
Addition(arr2);


// 4.	Return all the prime numbers in an array
 
var checkPrime = function (num) {

    var primeNumbers = [];

    for (var j in num) {

        var number =num[j];
        var isPrime = true;

        if (number <= 1) {
            break;
        }
        else {
            for (let i = 2; i < number; i++) {
              if (number % i == 0) {
                isPrime = false;
                break;
              }
            }
          }
          if(isPrime) {
            primeNumbers.push(number);
          }
    }
    return primeNumbers;
  }
  
  var arr3= [5, 6, 7, 8, 9, 13]
  console.log(checkPrime(arr3));


// 5.	Return all the palindromes in an array

const isPalindrome = function(el) {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {return false; }
   }
   return true;
};
const findPalindrome = function (arr) {return arr.filter(function(el) { return isPalindrome(el);});
};

const arr4 = ['carecar', 1344, 12321, 'did', 'cannot'];

console.log(findPalindrome(arr4));


// 6.	Return median of two sorted arrays of same size



var findmedian = function ( nums1, nums2) {
  let i1 =0;
  let i2=0;
  
  const len1 = nums1.length;
  const len2 = nums2.length;
  
  const len = len1 + len2;
  
  if (len ===0){
    return null
  }
  
  const merged = [];
  
  while (i1<len1 && i2<len2){
    if (nums1[i1] <= nums2[i2]){
      merged.push(nums1[i1++])
    } else
    { merged.push(nums2[i2++])
      }
  }
  
  while (i1<len1) {
    merged.push(nums1[i1++]);
    }
  while (i2<len2){
    merged.push(nums2[i2++])
  }
  
  return (merged[len/2] + merged[len/2-1])/2
}

const ar5 = [ 1, 12, 15, 26, 38 ];
const ar6 = [ 2, 13, 17, 30, 45 ];

console.log (findmedian (ar5, ar6));

//  

// 7.	Remove duplicates from an array

var returnUnique = function (chars){

let uniqueChars = [];
chars.forEach( function (c) {
    if (!uniqueChars.includes(c)) 
    {uniqueChars.push(c);}
    });
    return (uniqueChars);
}

var chars = ['A', 'B', 'A', 'C', 'B'];


console.log(returnUnique(chars));
//  
// 8.	Rotate an array by k times

let rotate = function(arr, numberOfShifts) {
    let deletedArray = arr.splice(arr.length-numberOfShifts); 
    
    for (var i in deletedArray){
        arr.splice(i,0,deletedArray[i]);
    }
    
    return arr;
};

const arr7 = [ 1, 12, 15, 26, 38 ];
var k = 3
console.log (rotate ( arr7, k));