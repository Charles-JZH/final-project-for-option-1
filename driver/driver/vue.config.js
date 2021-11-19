module.exports = {

  configureWebpack: {

    // other webpack options to merge in ...

  },
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: '12345'
  }
}
