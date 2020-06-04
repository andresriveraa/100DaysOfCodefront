const path = require('path');

module.export= {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    route: path.resolve(__dirname, 'dist' ),
    filename: 'boundle.js'
  }
}