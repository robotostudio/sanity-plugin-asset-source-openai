# sanity-plugin-asset-source-openai

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-asset-source-openai
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {openaiImageAsset} from 'sanity-plugin-asset-source-openai'
export default defineConfig({
  // ...
  plugins: [openaiImageAsset({
      API_KEY:"your_api_key_from_openai"
    })],
})
```

## Tutorial
https://www.loom.com/share/267fed477cf4458394eb2c2e4c964efc

## License

[MIT](LICENSE) © Hrithik Prasad

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
