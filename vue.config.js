module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001',
        ws: true,
        secure: false
      }
    }
  }
}

// http://localhost:8080/api/v1/categories

// http://localhost:3001/api/v1/categories