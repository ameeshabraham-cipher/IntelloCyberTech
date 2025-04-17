import fs from 'fs';

const filePath = 'client/src/pages/InsightPost.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all image paths
content = content.replace(/image: '\/images\/blog\//g, "image: './images/blog/");

fs.writeFileSync(filePath, content);
console.log('InsightPost image paths updated successfully!');
