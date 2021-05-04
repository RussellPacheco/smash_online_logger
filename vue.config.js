module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
        "/match": {
          target: "http://localhost:9000",
          secure: false,
          changeOrigin: true
        },
      },
    },
  };
  