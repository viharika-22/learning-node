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

