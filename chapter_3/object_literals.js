// CHAPTER 3 -- OBJECTS


// Object literals -- notation to create new objects
// e.g.
var empty_object = {};

var stooge = {
    'first-name': 'Ira',
    'last-name': 'Horecka'
};

console.log(typeof(empty_object), empty_object);
console.log(typeof(stooge), stooge);

// objects can nest - it this JSON?
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

console.log(flight)