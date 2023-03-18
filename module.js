const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system update in seconds
console.log(`System uptime: ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS);



const path = require('path');

console.log(path.sep);

const filePath = path.join('/folder/','subfolder','text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'folder', 'subfolder', 'text.txt');
console.log(absolute);






