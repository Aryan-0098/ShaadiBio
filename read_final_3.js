const fs = require('fs');
try {
    const content = fs.readFileSync('report_final_3.txt', 'utf16le'); // Redirect usually makes utf16le on windows powershell
    console.log(content);
} catch (err) {
    console.error(err);
}
