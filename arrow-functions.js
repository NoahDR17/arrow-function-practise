/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}
sum = addTwoNumbers(3, 5);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}
sum = addTwoNumbers(3, 5);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("Something");

const helloWorld = () => console.log("Hello World!");

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)
