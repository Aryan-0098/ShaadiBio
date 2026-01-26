const fs = require('fs');
try {
    const content = fs.readFileSync('report_tsc_final.txt', 'utf8');
    console.log(content);
} catch (err) {
    console.error(err);
}
