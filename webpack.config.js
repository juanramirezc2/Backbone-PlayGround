module.exports = {
  entry: {
    app:'./scripts/main.js',
    vendor:['backbone','jquery']
  },
  output: {
    filename: '[name].js'
  }
};
