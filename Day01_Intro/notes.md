**What is Node.js?**
Node.js is a JavaScript runtime environment that lets you run JavaScript outside the browser, usually on a server.

<img width="1021" height="380" alt="image" src="https://github.com/user-attachments/assets/ff0c96cb-07ac-4c0a-8977-a2e07482b388" />

**📦 Modules in Node.js**

Modules are like reusable blocks of code. They help you split your code into smaller files, so it's easier to manage and reuse.

**🔸 Types of Modules:**

Built-in Modules → Come with Node.js

User-defined Modules → Your own code files

3rd Party Modules → Installed via npm (like express, dotenv)

**fs - File System **

fs.writeFileSync('demo.txt', 'Hello World')  --- to write in file
fs.readFileSync('demo.txt','utf8')  --- to read a file
fs.appendFileSync('demo.txt','\nNew Line')  --- to read a file
fs.unlinkSync('demo.txt') --- to delete file

**os - opertaing system**

os.userInfo() --- current user info
os.uptime() --- uptime in seconds
os.type() --- "windows" (system info)
os.platform() --- "win32" (system info)
os.totalmem() --- total memory
os.freemem() --- free memory

**path - file/directory path utility **

path.basename(filename) - current filename
path.dirname(filename) - directory name
path.extname(filename) - file extention
path.join(dirname,'xyz.txt','note.txt') - current filename

**http – Create HTTP Server**

const server = http.createServer((req, res) => {
  res.end('Hello from Node server!');
});

server.listen(3000);

 In real-world apps, we use Express instead for simplicity.

**events – EventEmitter**

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Viharika');

**crypto – For Hashing/Encryption**

crypto.createHash('sha256').update('password').digest('hex');


<img width="1098" height="510" alt="image" src="https://github.com/user-attachments/assets/38195f6c-a70f-42f7-8b2d-395953227023" />

