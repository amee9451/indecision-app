// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Ben',
    cities: ['Jersey City', 'New York', 'Cedar Grove'],
    printPlacesLived () {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [1, 4, 3, 2, 1],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());