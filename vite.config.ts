import { resolve } from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  define: {
    'process.env': (process.env.NODE_ENV !== 'production') ? {} : process.env,
  },
  plugins: [
    uni(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'uni-app',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
  ],
})
