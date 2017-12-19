
class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting () {
        return `Hi. I am ${ this.name }!`;
    }

    getDescription () {
        return `${ this.name } is ${ this.age } year${ this.age === 1 ? '' : 's' } old.`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription () {
        let description = super.getDescription();

        if (this.hasMajor())
            description += ` Their major is ${ this.major }.`;

        return description;
    }

    hasMajor () {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting () {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation())
            greeting += ` I'm visiting from ${ this.homeLocation }.`

        return greeting;
    }
}

const me = new Student('Ben Thompson', 36, 'Computer Science');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());


const meTraveler = new Traveler('Ben Thompson', 36, 'Jersey City');
console.log(meTraveler.getGreeting());
console.log(meTraveler.getDescription());

const otherTraveler = new Traveler();
console.log(otherTraveler.getGreeting());
console.log(otherTraveler.getDescription());
