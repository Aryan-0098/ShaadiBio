const fs = require('fs');
try {
    const content = fs.readFileSync('report_final.txt', 'utf16le');
    console.log(content);
} catch (err) {
    console.error(err);
}
