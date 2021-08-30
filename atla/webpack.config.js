const path = require('path');

module.exports = {
  entry: {
    index: './assets/index.js',  // path to our input file
    characters: './assets/characters.js',  // path to our input file
    new_character: './assets/new_character.js',  // path to our input file
  },
  output: {
    filename: '[name]-bundle.js',  // output bundle file name
    path: path.resolve(__dirname, './static'),  // path to our Django static directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
    ]
  }
};
