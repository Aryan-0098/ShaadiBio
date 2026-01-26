const fs = require('fs');
try {
    const content = fs.readFileSync('report.txt', 'utf16le');
    const lines = content.split('\n');
    let useNextLine = false;
    for (const line of lines) {
        if (line.trim().length === 0) continue;
        // filename usually starts with path
        if (line.includes('src/') || line.includes('C:\\')) {
            console.log('FILE:', line.trim());
        }
        if (line.includes('Error')) {
            console.log('ERROR:', line.trim());
        }
        if (line.includes('Warning')) {
            console.log('WARNING:', line.trim());
        }
    }
} catch (err) {
    console.error(err);
}
