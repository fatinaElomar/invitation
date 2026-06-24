const fs = require('fs');
let content = fs.readFileSync('wedding.html', 'utf8');

const colorMap = {
  '#b29686': '#8c6e5e',
  '#6d5345': '#4a3429',
  '#3a2a20': '#261b14',
  '#8a7060': '#6d5345',
  '#dac0b0': '#b89785',
  '#c4a882': '#a68962',
  '%23c4a882': '%23a68962',
  '#5d4236': '#3d2b23',
  '#c9b09e': '#a88d79',
  '#a38171': '#806050',
  '#3f2d24': '#261b14',
  '#886f60': '#665042',
  '#735b4d': '#544034',
  '#5d4135': '#3d2b23',
  '#d8bcae': '#b89785',
  '#b39888': '#8f7566',
  '#4f3a31': '#36261f'
};

for (const [oldC, newC] of Object.entries(colorMap)) {
  const regex = new RegExp(oldC, 'gi');
  content = content.replace(regex, newC);
}

fs.writeFileSync('wedding.html', content);
