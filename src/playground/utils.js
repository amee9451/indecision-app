console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export { 
    square, 
    add,
    subtract as default
};

// or this:
//export default subtract;

// or this:
//export default (a, b) => a - b;