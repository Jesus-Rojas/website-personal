module.exports = {
  'src/**/*.{js,ts,css,scss,sass}': files =>
    `ng lint ${files.map(file => `--lint-file-patterns ${file}`).join(' ')}`,
};
