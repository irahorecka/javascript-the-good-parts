// CHAPTER 2 -- GRAMMAR


// Whitespace
var test = "this is a test"; // permitted
// vartest = "this is a test"; -- not permitted

// Names
// names can be anything they want as long as they are not reserved words - pg 6

// Numbers
// JS has one numbe type -- 64 bit floating point
console.log(1.0 === 1);  // true
console.log(1e2 === 100);  // true

// Strings
// wrapped in '' or ""
// no char type
// escape char like python
// you can add str together like this
"c" + "a" + "t" === "cat";
// strings also have methods, like python
console.log("cat".toUpperCase());

// Statements
// statements tend to be executed in order from top to bottom
// this execution order can be altered through if statements, loops, etc
// disruptive statements are throw, return, break

// bonus, use typeof to reveal data type -- similar to type in Python
console.log(typeof(x));  // number