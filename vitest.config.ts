import { defineConfig } from 'vitest/config'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      solidPlugin({
        // https://github.com/solidjs/solid-refresh/issues/29
        hot: false,
        solid: { generate: 'dom' },
      }),
    ],
    resolve: {
      conditions: ['browser', 'development'],
    },
  }
})
