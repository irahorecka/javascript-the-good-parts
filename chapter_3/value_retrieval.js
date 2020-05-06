// CHAPTER 3 -- OBJECTS


// Retrieve values from an object
// two ways:
// wrap a string expression in []
// using . notation is string expression is a string literal
var stooge = {
    'first-name': 'Ira',
    'last-name': 'Horecka'
};

var flight = {
    airline: "united",
    departure: {
        IATA: "SYD",
        time: "2020-05-05 09:00",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2020-05-05 17:30",
        city: "Los Angeles"
    }
};

console.log(stooge["first-name"]);  // Ira
console.log(flight.airline);  // united

// undefined will be returned if the key doesn't exist
console.log(stooge["middle-name"]);  // undefined

// use || to fill in default values
var middle = stooge["middle-name"] || "I'm not sure...";
console.log(middle);  // I'm not sure...

// attempting to retrieve a value from undefined will result in a TypeError
var equipment = flight.equipment; // undefined
// var equipment_model = flight.equipment.model; // TypeError

// use the && operator to guard against this exception
var test = flight.equipment && flight.equipment.model;  // undefined
console.log(test);
