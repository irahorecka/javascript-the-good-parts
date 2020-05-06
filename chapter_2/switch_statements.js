// CHAPTER 2 -- GRAMMAR


// the switch statement
// let's see that jack is the cutest
dog = "jack"
switch (dog) {
    case "rob":
        console.log('OK');
        break;
    case "jack":
        console.log('the cutest!');
        break;
    case "doug":
        // this will be executed if cases aren't broken (i.e. after jack all will be printed)
        console.log('OK');
        break;
    default:
        // will run if none of the switch cases are met
        console.log("I guess they're all cute");
}