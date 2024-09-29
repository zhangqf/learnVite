import {defineConfig} from "vite";
const postcssPresetEnv = require('postcss-preset-env')

export default defineConfig({
  optimizeDeps:{
    exclude: [] // 指定数组中的依赖不进行依赖预构建
  },
  css: {
    modules: { // 对css模块化的默认行为进行覆盖
      localsConvention: "camelCase",
      scopeBehaviour: 'local',
      hashPrefix: 'az',
      globalModulePaths: [],
      generateScopedName: "[name]_[local]_[hash:5]"
    },
    preprocessorOptions:{
      less: { // 整个的配置对象都会最终给到less的执行参数中去（lessc --math=‘always’）
        math: 'always',
        globalVar: { // 全局变量

        }
      },
      sass: {

      }
    },
    devSourcemap: true,
  }
})
