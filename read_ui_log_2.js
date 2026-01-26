const fs = require('fs');
try {
    const content = fs.readFileSync('report_ui_2.txt', 'utf8');
    console.log(content);
} catch (err) {
    console.error(err);
}
