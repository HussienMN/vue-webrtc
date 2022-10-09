const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  pages: {
        index: {
          entry: 'src/index.js',
          template: 'public/index.html',
          title: 'index page'
    },
    subpage: 'src/main.js' 
  }
})
