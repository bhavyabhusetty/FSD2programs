const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence) => {
    const reversed = sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

    console.log("Result:", reversed);
    rl.close();
});

