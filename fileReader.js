const fs = require("fs");
const path = require("path");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter the file name: ", (fileName) => {
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
        } else {
            console.log("File content (async):\n", data);
        }

        try {
            const syncData = fs.readFileSync(filePath, "utf8");
            console.log("File content (sync):\n", syncData);
        } catch (syncErr) {
            console.error("Error reading file (sync):", syncErr.message);
        }

        readline.close();
    });
});