const fs = require('fs');
try {
    const content = fs.readFileSync('report_final_fix.txt', 'utf8');
    console.log(content);
} catch (err) {
    console.error(err);
}
