const fs = require('fs');
try {
    const content = fs.readFileSync('report_phase3_fail.txt', 'utf8');
    console.log(content);
} catch (err) {
    console.error(err);
}
