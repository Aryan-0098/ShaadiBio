const fs = require('fs');
try {
    const content = fs.readFileSync('report_mobile_fix.txt', 'utf8');
    console.log(content);
} catch (err) {
    console.error(err);
}
