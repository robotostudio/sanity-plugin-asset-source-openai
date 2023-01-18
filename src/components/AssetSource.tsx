import {SiOpenai} from 'react-icons/si'
import {AssetSourceComponentProps} from 'sanity'
import ImagePlugin from './OpenAIAssetSource'

export function getPlugin(API_KEY: string) {
  const HOC = (args: AssetSourceComponentProps & {API_KEY: string}) => (
    <ImagePlugin {...args} API_KEY={API_KEY} />
  )
  const OpenAIImagePlugin = {
    name: 'openAI',
    title: 'Open AI Image',
    component: HOC,
    icon: SiOpenai,
  }
  return OpenAIImagePlugin
}
