const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'files');

// Directory check and creation
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

for (let i = 0; i < 5; i++) {
  const filePath = path.join(dirpath, "hello" + i + ".txt");
  fs.writeFileSync(filePath, "a simple txt file");
}
