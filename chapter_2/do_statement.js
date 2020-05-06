// CHAPTER 2 -- GRAMMAR


// the do statement is like the while statement, except it is executed
// once prior to going into a purportedly infinite loop
var text = "";
var i = 0;
do {
    text += "The number is " + i + "\n";
    i ++;
    console.log(text);
    // you get a factorial like result...
}
while (i < 10);