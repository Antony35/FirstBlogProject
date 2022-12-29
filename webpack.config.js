/*global require*/
/*eslint no-undef: "error"*/

const path = require('path');

/*global module*/
/*eslint no-undef: "error"*/

module.exports = {
  mode: "production",
  entry: {
    polyfill: "babel-polyfill",
    main: ["./js/album.js", "./js/menuBurger.js", "./js/topArrow.js"],
    contact: ["./js/contact.js"],
    slider: ["./js/slider.js"],
    homemade: ["./js/homeMade"]
  },

  /*global __dirname*/
/*eslint no-undef: "error"*/

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};