# 📘 Day 01 - Introduction to Node.js

---

## 🚀 What is Node.js?

> **Node.js** is a JavaScript runtime environment that lets you run JavaScript outside the browser, typically on a server.

![Node.js Diagram](https://github.com/user-attachments/assets/ff0c96cb-07ac-4c0a-8977-a2e07482b388)

---

## 📦 Modules in Node.js

Modules are reusable blocks of code. They help you split your code into smaller, manageable, and reusable files.

### 🔸 Types of Modules:

- **Built-in Modules** → Come with Node.js  
- **User-defined Modules** → Your own code files  
- **3rd Party Modules** → Installed via npm (e.g., `express`, `dotenv`)

---

## 📁 Built-in Modules

---

### 🗂️ `fs` - File System

```js
fs.writeFileSync('demo.txt', 'Hello World');      // Write to file
fs.readFileSync('demo.txt', 'utf8');              // Read from file
fs.appendFileSync('demo.txt', '\nNew Line');      // Append to file
fs.unlinkSync('demo.txt');                        // Delete file

---

### 🧠 `os`- Operating System Info
const os = require('os');

os.userInfo();     // Get current user info
os.uptime();       // System uptime (in seconds)
os.type();         // OS name (e.g., "Windows_NT")
os.platform();     // Platform (e.g., "win32")
os.totalmem();     // Total memory
os.freemem();      // Free memory

---

### 📂 path - Path Utilities


path.basename(__filename); // current file name
path.dirname(__filename);  // directory name
path.extname(__filename);  // file extension
path.join(__dirname, 'files', 'notes.txt')

---

### http – Create HTTP Server

http.createServer((req, res) => {
  res.end('Hello from Node server!');
});

ℹ️ In real-world applications, we use Express for simplicity.

---

### events – EventEmitter

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Viharika');

---

### crypto – For Hashing/Encryption

crypto.createHash('sha256').update('password').digest('hex')

<img width="923" height="566" alt="image" src="https://github.com/user-attachments/assets/940735c7-730e-4a35-97fc-d34f8b81e4ad" />

