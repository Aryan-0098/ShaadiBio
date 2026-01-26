const fs = require('fs');
try {
    const content = fs.readFileSync('report_ui.txt', 'utf8'); // trying utf8 this time as npx usually outputs utf8
    console.log(content);
} catch (err) {
    console.error(err);
}
