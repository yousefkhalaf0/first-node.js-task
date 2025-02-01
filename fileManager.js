const fs = require("fs");
const path = require("path");
const readline = require("readline-sync");

// Function to read a file
function readFile() {
    const fileName = readline.question("Enter the file name to read: ");
    const filePath = path.join(__dirname, fileName);

    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf8");
        console.log("\n📖 File Content:\n", content);
    } else {
        console.log("\n⚠️ File does not exist!");
    }
}

// Function to write a file
function writeFile() {
    const fileName = readline.question("Enter the file name to write: ");
    const filePath = path.join(__dirname, fileName);

    // If file exists, remove and create a new one
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log("\n✅ Old file removed. Creating a new file...");
    }

    const content = readline.question("Enter content for the file: ");
    fs.writeFileSync(filePath, content, "utf8");
    console.log("\n💾 File saved successfully!");

    // Option to print content
    readFile();
}

// Interactive Menu
function main() {
    while (true) {
        console.log("\n📜 MENU");
        console.log("[1] Read a file");
        console.log("[2] Write a file");
        console.log("[3] Exit");

        const choice = readline.question("Pick an option: ");

        if (choice === "1") {
            readFile();
        } else if (choice === "2") {
            writeFile();
        } else if (choice === "3") {
            console.log("\n👋 Exiting... Goodbye!");
            process.exit(0);
        } else {
            console.log("\n❌ Invalid option! Try again.");
        }
    }
}

// Start the app
module.exports = main;