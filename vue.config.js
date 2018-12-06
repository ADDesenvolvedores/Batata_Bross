module.exports = {
  configureWebpack: {
    mode: "production",
    output: {
      filename: "[name].[hash].js"
    }
  },
  // resolve: {
  //   alias: {
  //     "@components": path.resolve(__dirname, "../src/components/")
  //   }
  // },
  css: {
    loaderOptions: {
      css: {
        localIdentName: "[name]-[hash]",
        camelCase: "only"
      },
      sass: {
        data: `
            @import "@/assets/_variables.scss";
            @import "@/assets/_mixins.scss";
          `
      }
    }
  }
};
