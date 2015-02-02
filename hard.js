// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?

// 23


// Write to the best if your understanding
// why c is the value that it is.

// c is 23 because a is a string. When b is added to a, the 
// number 2 is simply added as part of the string.




var str = "Version " + 5 + 1;


// Q: What is the value of str?

// Version 51


// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?

// str is Version 51 because Version is a string. When 5 and 1 are 
// added to version, they become part of the string and are not added together.

// str = "Version" + (5 + 1);



