module.exports = {
  entry: {
    app:'./scripts/main.js',
    vendor:['backbone','jquery','underscore']
  },
  output: {
    filename: './public/[name].js'
  }
};
