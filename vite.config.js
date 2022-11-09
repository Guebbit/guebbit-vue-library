import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vuetify from "@vuetify/vite-plugin";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import svgLoader from "vite-svg-loader";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    /*
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    }),
    svgLoader()
    */
  ],
  // define: { "process.env": {} },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'moon',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
