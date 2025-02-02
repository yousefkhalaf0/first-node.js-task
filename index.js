const fs = require("fs");
const path = require("path");
const readline = require("readline-sync");

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

function writeFile() {
    const fileName = readline.question("Enter the file name to write: ");
    const filePath = path.join(__dirname, fileName);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log("\n✅ Old file removed. Creating a new file...");
    }

    const content = readline.question("Enter content for the file: ");
    fs.writeFileSync(filePath, content, "utf8");
    console.log("\n💾 File saved successfully!");

    readFile();
}

function main() {
    while (true) {
        console.log("\n📜 MENU");
        console.log("[1] Read a file");
        console.log("[2] Write a file");
        console.log("[3] Exit");

        const choice = readline.question("Pick an option: ");

        switch (choice) {
            case "1":
                readFile();
                break;
            case "2":
                writeFile();
                break;
            case "3":
                console.log("\n👋 Exiting... Goodbye!");
                process.exit(0);
                break;
            default:
                console.log("\n❌ Invalid option! Try again.");
                break;
        }
    }
}

module.exports = main;