/* eslint-disable no-console */
import ImagePlugin from 'components/OpenAIAssetSource'
import {definePlugin} from 'sanity'

interface OpenaiImageAssetConfig {
  /* nothing here yet */
  API_KEY: string
}

// import {SiOpenai} from 'react-icons/si'
// import {definePlugin} from 'sanity'
// import ImagePlugin from '../../components/ImagePlugin'

// export const openAIImagePlugin = definePlugin<{API_KEY: string}>(({API_KEY}) => {
//   return {
//     name: 'Open AI Image',
//     form: {
//       image: {
//         assetSources: (prev) => {
//           const HOC = (arg: any) => <ImagePlugin {...arg} api_key={API_KEY} />
//           const OpenAIImagePlugin = {
//             name: 'openAI',
//             title: 'Open AI Image',
//             component: HOC,
//             icon: SiOpenai,
//           }
//           return [...prev, OpenAIImagePlugin]
//         },
//       },
//     },
//   }
// })

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
const OpenAIImagePlugin = {
  name: 'openAI',
  title: 'Open AI Image',
  component: ImagePlugin,
}

export const openaiImageAsset = definePlugin<OpenaiImageAssetConfig>(({API_KEY}) => {
  console.log('updated')
  return {
    name: 'Open AI Image',
    form: {
      image: {
        assetSources: (prev) => {
          return [...prev, OpenAIImagePlugin]
        },
      },
    },
  }
})
