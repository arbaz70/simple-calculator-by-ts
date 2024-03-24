#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "first number" },
    { message: "Enter second number", type: "number", name: "second number" },
    {
        message: "Select one of the operations to perform",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// Conditional operations
if (answer.operator === "addition") {
    console.log(answer["first number"] + answer["second number"]);
}
else if (answer.operator === "subtraction") {
    console.log(answer["first number"] - answer["second number"]);
}
else if (answer.operator === "multiplication") {
    console.log(answer["first number"] * answer["second number"]);
}
else if (answer.operator === "division") {
    console.log(answer["first number"] / answer["second number"]);
}
else {
    console.log("Please select a valid operator.");
}
