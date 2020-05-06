// CHAPTER 2 -- GRAMMAR


// the for statement -- comes in two forms
// 1) initialization, condition, increment
// 2) for in -- enumerates the property names of an object -- each loop, another object item is assigned to the iterator

// 1
for (i = 0; i < 10; i++) {
    // print 'hello' 10x
    console.log('hello');
}

// 2
var name_list = ['Ira', 'Nanna', 'Kevin', 'Gene'];
for (name in name_list) {
    // note - even in a for-in loop, name is the index of the list
    console.log(name_list[name]);
}