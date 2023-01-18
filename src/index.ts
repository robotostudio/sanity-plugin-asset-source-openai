import {definePlugin} from 'sanity'
import {getPlugin} from './components/AssetSource'

interface OpenaiImageAssetConfig {
  API_KEY: string
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {openaiImageAsset} from 'sanity-plugin-asset-source-openai'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [openaiImageAsset()],
 * })
 * ```
 */

export const openaiImageAsset = definePlugin<OpenaiImageAssetConfig>(({API_KEY}) => {
  return {
    name: 'Open AI Image',
    form: {
      image: {
        assetSources: (prev) => {
          const OpenAIImagePlugin = getPlugin(API_KEY)
          return [...prev, OpenAIImagePlugin]
        },
      },
    },
  }
})
