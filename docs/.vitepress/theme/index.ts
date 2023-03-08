/*
 * @Author: guanchi.chen
 * @Date: 2023-03-01 23:15:39
 * @LastEditTime: 2023-03-07 15:03:15
 * @LastEditors: guanchi.chen
 * @Description:
 * @FilePath: \jereh-ui\docs\.vitepress\theme\index.ts
 */
import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(ElementPlus)
    app.component('demo-preview', ElementPlusContainer)
  }
}
