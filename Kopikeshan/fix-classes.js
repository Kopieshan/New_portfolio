const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

const replacements = {
  'gap-xs': 'gap-1',
  'gap-sm': 'gap-2',
  'gap-md': 'gap-4',
  'gap-lg': 'gap-6',
  'gap-xl': 'gap-8',
  'gap-2xl': 'gap-12',
  'gap-3xl': 'gap-16',
  'gap-4xl': 'gap-20',
  'gap-gutter': 'gap-6',
  
  'p-xs': 'p-1',
  'p-sm': 'p-2',
  'p-md': 'p-4',
  'p-lg': 'p-6',
  'p-xl': 'p-8',
  'p-2xl': 'p-12',
  
  'px-xs': 'px-1',
  'px-sm': 'px-2',
  'px-md': 'px-4',
  'px-lg': 'px-6',
  'px-xl': 'px-8',
  'px-2xl': 'px-12',
  'px-margin': 'px-8',
  
  'py-xs': 'py-1',
  'py-sm': 'py-2',
  'py-md': 'py-4',
  'py-lg': 'py-6',
  'py-xl': 'py-8',
  'py-2xl': 'py-12',
  
  'pt-md': 'pt-4',
  'pt-3xl': 'pt-16',
  'pt-4xl': 'pt-20',
  'pb-lg': 'pb-6',
  'pb-4xl': 'pb-20',
  'mb-sm': 'mb-2',
  'mb-md': 'mb-4',
  'mb-lg': 'mb-6',
  'mb-xl': 'mb-8',
  'mb-3xl': 'mb-16',
  'mt-xs': 'mt-1',
  'mt-sm': 'mt-2',
  'mt-md': 'mt-4',
  'mt-xl': 'mt-8',
  'mt-3xl': 'mt-16',
  
  'h-20': 'h-20', // standard
  
  'font-headline-lg': 'text-headline-lg',
  'font-headline-md': 'text-headline-md',
  'font-headline-sm': 'text-headline-sm',
  'font-display': 'text-display',
  'font-body-lg': 'text-body-lg',
  'font-body-md': 'text-body-md',
  'font-body-sm': 'text-body-sm',
  'font-label-md': 'text-label-md',
  'font-code': 'text-code'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.astro') || file.endsWith('.html') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(directory);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Replace all word boundaries for the classes
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    content = content.replace(regex, value);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log('Class replacement complete.');
