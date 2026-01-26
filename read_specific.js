const fs = require('fs');
try {
    console.log("ESLINT REPORT:");
    console.log(fs.readFileSync('report_specific.txt', 'utf8'));
    console.log("TSC REPORT:");
    console.log(fs.readFileSync('report_tsc.txt', 'utf8'));
} catch (err) {
    console.error(err);
}
