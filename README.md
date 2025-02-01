# 📂 Node.js File Manager

## 🚀 Overview
This is a **command-line file manager** built using Node.js. It allows users to:
- 📖 Read a file
- 📝 Write a file
- 🚪 Exit the program

The project demonstrates **synchronous and asynchronous file operations** using Node.js's `fs` module, along with user input handling via `readline-sync`.

---

## 📜 Features
✅ **Read files**: Displays the content of an existing file.
✅ **Write files**: Allows users to create or overwrite files.
✅ **Handles missing files**: Prevents crashes and provides clear error messages.
✅ **Interactive CLI menu**: Easy-to-use navigation for file operations.
✅ **Sync & Async operations**: Implements both synchronous (`fs.readFileSync`) and asynchronous (`fs.readFile`).

---

## 🛠 Installation & Usage

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yousefkhalaf0/node-file-manager.git
cd node-file-manager
```

### 2️⃣ Install Dependencies
```sh
npm install readline-sync
```

### 3️⃣ Run the Program
```sh
node main.js
```

---

## 📂 Project Structure
```bash
📦 node-file-manager
├── 📄 fileReader.js    # Standalone script for reading files
├── 📄 fileManager.js   # Interactive file management system
├── 📄 main.js          # Entry point for running the CLI tool
├── 📄 README.md        # Documentation file
└── 📄 package.json     # Dependencies and project metadata
```

---

## 📝 How It Works
### **1️⃣ fileReader.js**
- Prompts the user for a filename.
- Reads the file **asynchronously** using `fs.readFile`.
- Reads the file **synchronously** using `fs.readFileSync`.
- Displays file content or an error message if the file doesn't exist.

### **2️⃣ fileManager.js**
- Provides a **menu-driven interface** for file operations.
- Uses `readline-sync` for handling user input synchronously.
- Supports:
  - **Reading a file**
  - **Writing a file** (overwrites if the file already exists)
  - **Graceful exit**

### **3️⃣ main.js**
- Imports `fileManager.js` and starts the interactive CLI tool.

---

## 🎯 Future Enhancements
🚀 **Add file deletion option**
🚀 **Improve UI using colors (`chalk` package)**
🚀 **Implement file streaming for large files**

---

## 📌 Author
**Yousef Khalaf**  
GitHub: [yousefkhalaf0](https://github.com/yousefkhalaf0)

---

## 📜 License
This project is **open-source** and available under the [MIT License](LICENSE).
