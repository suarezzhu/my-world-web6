import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  plugins: [
    vue(),

  ],

  resolve: {
    alias: {
      // 这里不需要__dirname，直接使用，因为vite3内置了这个变量，用vite2的方式会报错
      '@':resolve('src'),
      '*':resolve(''),
      'Assets':resolve('src/assets'),
      "views": resolve("src/views"),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',

    },

  },

  css: {
    preprocessorOptions: {
      // 导入scss预编译程序
      scss: {
        additionalData: `
        @import "@/styles/_mixins.scss";
        @import "@/styles/_variables.scss";
        
        `,
        // prependData: `@import "assets/css/_variable.scss";`
      },
    },

  },


  // 这里是代理配置，如果后端设置了跨域，这里可以直接删掉
  server: {
    proxy: {
      '/api': {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true
      }
    }
  }


})