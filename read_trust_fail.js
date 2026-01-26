const fs = require('fs');
try {
    const content = fs.readFileSync('build_trust_fail.txt', 'utf8');
    console.log(content);
} catch (err) {
    console.error(err);
}
