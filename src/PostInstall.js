const fs = require('fs-extra');

fs.readFile('./tailwind.config.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading tailwind.config.js:', err);
    return;
  }

  let modifiedContent = data.replace(
    /module\.exports\s*=\s*\{/,
    "module.exports = {\n  darkMode: 'class',"
  );

  fs.writeFile('./tailwind.config.js', modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to tailwind.config.js:', err);
      return;
    }
    console.log('tailwind.config.js modified successfully');
  });
});
