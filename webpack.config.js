module.exports = {
  entry: {
    app:'./scripts/main.js',
    vendor:['backbone','jquery','underscore','react']
  },
  output: {
    filename: './public/[name].js'
  },
  module:{
    loaders: [{
      test : /\.js$/,
      exclude: /node_modules/,
      loaders:["react-hot","babel-loader"]
    }
    ]
  }
};
