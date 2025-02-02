# File Manager CLI

A simple command-line application built with Node.js to read and write files in the current directory.

---

## Features

- **Read Files**: View the content of any file in the current directory.
- **Write Files**: Create or overwrite files with user-provided content.
- **User-Friendly Menu**: Interactive menu for easy navigation.
- **Error Handling**: Handles invalid inputs and non-existent files gracefully.

---

## Prerequisites

Before running the program, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/file-manager-cli.git
   ```
2. Navigate to the project directory:
   ```bash
   cd file-manager-cli
   ```
3. Install the required dependency (`readline-sync`):
   ```bash
   npm install
   ```

---

## Usage

1. Run the program:
   ```bash
   node main.js
   ```
2. Follow the on-screen menu:
   - **Option 1**: Read a file.
     - Enter the name of the file you want to read.
     - The program will display the file's content if it exists.
   - **Option 2**: Write to a file.
     - Enter the name of the file you want to write to.
     - If the file already exists, it will be overwritten.
     - Enter the content you want to write to the file.
     - The program will save the file and display its content.
   - **Option 3**: Exit the program.

---

## Example Workflow

### Reading a File
```
📜 MENU
[1] Read a file
[2] Write a file
[3] Exit
Pick an option: 1
Enter the file name to read: example.txt

📖 File Content:
Hello, World!
```

### Writing to a File
```
📜 MENU
[1] Read a file
[2] Write a file
[3] Exit
Pick an option: 2
Enter the file name to write: example.txt
Enter content for the file: This is a new file.

💾 File saved successfully!

📖 File Content:
This is a new file.
```

### Exiting the Program
```
📜 MENU
[1] Read a file
[2] Write a file
[3] Exit
Pick an option: 3

👋 Exiting... Goodbye!
```

---

## Code Structure

- **`index.js`**: Contains the main logic for reading, writing, and managing files.
- **`main.js`**: Imports and runs the `main` function from `index.js`.

---

## Dependencies

- [readline-sync](https://www.npmjs.com/package/readline-sync): A synchronous library for reading user input from the command line.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with Node.js and `readline-sync`.
- Inspired by simple file management utilities.
