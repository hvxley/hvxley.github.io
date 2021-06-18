const path = require('path');

module.exports = {
  mode: 'production',
  entry: './assets/js/lib/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'assets'),
  },
};
