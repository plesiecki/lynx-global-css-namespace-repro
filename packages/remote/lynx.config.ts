import { defineConfig } from '@lynx-js/rspeedy'

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
import { pluginTypeCheck } from '@rsbuild/plugin-type-check'

export default defineConfig({
  source: {
    entry: {
      main: './index.tsx',
    },
  },
  output: {
    filename: 'remote.lynx.bundle'
  },
  server: {
    port: 3000
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx({
      experimental_isLazyBundle: true,
    }),
    // pluginTypeCheck(),
  ],
})
