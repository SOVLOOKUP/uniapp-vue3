import { defineConfig, presetIcons } from 'unocss'

// https://github.com/zguolee/unocss-preset-uni
import { presetUni } from 'unocss-preset-uni'

export default defineConfig({
  shortcuts: {
    'bg-base': 'bg-gray-100 dark:bg-dark',
    'bg-base-second': 'bg-white dark:bg-dark-100',
    'color-base': 'text-gray-700 dark:text-gray-200/50',
    'color-base-second': 'text-gray-400 dark:text-gray-500/50',
    'border-base': 'border border-gray-200 dark:border-gray/50',
    'bg-primary': 'bg-light-blue-500 dark:bg-light-blue-600',
  },
  presets: [
    presetUni() as any,
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  rules: [
    ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
})
