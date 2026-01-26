const fs = require('fs');
try {
    const content = fs.readFileSync('report.txt', 'utf16le');
    console.log(content.substring(0, 10000));
} catch (err) {
    console.error(err);
}
