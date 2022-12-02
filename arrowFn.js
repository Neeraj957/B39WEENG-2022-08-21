// 	Do the below programs in arrow functions

// 1.	Print odd numbers in an array

var oddnumbers =  (num) => {
    for (var i of num) {
          if (i % 2 !== 0) {
             console.log(i);
          }
       }
    }
    
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    oddnumbers(arr);


// 2.	Convert all the strings to title caps in a string array

var TitleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i in str) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);   
    }
    console.log(str.join(' '));
    }

var arr1 = 'Guvi Geek';
TitleCase(arr1);

// 3.	Sum of all numbers in an array

var Addition = (array) => {
    
    var sum = 0;

    for (var i in array) {

        sum = sum + array[i];
    }

    console.log(sum);

}

var arr2 = [1, 2, 3, 4, 5];
Addition(arr2);

// 4.	Return all the prime numbers in an array

var checkPrime = (num) =>  {

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

// 5. Return all the palindromes in an array

const isPalindrome = (el) => {
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
