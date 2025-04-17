import fs from 'fs';
import path from 'path';

const filePath = 'client/src/pages/Insights.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all image paths
content = content.replace(/image: '\/images\/blog\//g, "image: './images/blog/");

fs.writeFileSync(filePath, content);
console.log('Image paths updated successfully!');
