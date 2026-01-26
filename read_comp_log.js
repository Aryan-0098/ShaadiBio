const fs = require('fs');
try {
    const content = fs.readFileSync('report_comp.txt', 'utf8');
    console.log(content.substring(0, 5000));
} catch (err) {
    console.error(err);
}
