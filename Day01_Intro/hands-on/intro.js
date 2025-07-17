const os = require('os')
const fs = require('fs')
const path = require('path')

const user = os.userInfo()
const uptime = os.uptime()
const freeMem = os.freemem()

fs.writeFileSync('log.txt',`User: ${user.username}\nUptime: ${uptime}\nFree Memory: ${freeMem}`)

path.join(__dirname, 'logs','log.txt')
console.log("System info logged successfully ✅")
