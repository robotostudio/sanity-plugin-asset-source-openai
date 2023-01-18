import {AssetFromSource, AssetSourceComponentProps} from 'sanity'
import {Dialog, Flex, Spinner, Stack, TextInput, Button, Label} from '@sanity/ui'
import React, {useState} from 'react'

async function fetchImage(prompt: string, API_KEY: string) {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${API_KEY}`)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    prompt,
    n: 1,
    size: '512x512',
    // eslint-disable-next-line camelcase
    response_format: 'b64_json',
  })

  const response = await (
    await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })
  ).json()

  return response.data
}

export default function ImagePlugin(props: AssetSourceComponentProps & {API_KEY: string}) {
  const [prompt, setPrompt] = useState('')
  const API_KEY = props.API_KEY
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState('')

  async function generateImage() {
    setLoading(true)
    const image = await fetchImage(prompt, API_KEY)
    const newImageValue = `data:image/png;base64,${image[0].b64_json}`
    setImg(newImageValue)
    setLoading(false)
  }

  function oonfirmImage() {
    const asset: AssetFromSource = {
      kind: 'url',
      value: img,
      assetDocumentProps: {
        _type: 'sanity.imageAsset',
        description: prompt,
      } as any,
    }
    props.onSelect([asset])
  }

  function handleClose() {
    props.onClose()
  }
  function handlePromptChange(event: any) {
    setPrompt(event.target.value)
  }
  return (
    <>
      <Dialog
        id="openai-asset-source"
        header="Select image from Open AI"
        onClose={handleClose}
        open
        width={4}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Stack padding={4}>
          <Flex direction={'column'} gap={2} onResize={undefined} onResizeCapture={undefined}>
            <Label onResize={undefined} onResizeCapture={undefined}>
              Enter Prompt Text
            </Label>
            <TextInput
              placeholder="Cats Driving Boat"
              value={prompt}
              onChange={handlePromptChange}
              onResize={undefined}
              onResizeCapture={undefined}
            />
          </Flex>
          <Stack padding={2} />

          {loading && (
            <Flex justify="center" onResize={undefined} onResizeCapture={undefined}>
              <Spinner size={3} muted onResize={undefined} onResizeCapture={undefined} />
            </Flex>
          )}
          {img && <img src={img} alt={prompt} width={512} height={512} />}
          <Stack padding={2} />

          <Flex gap={4} onResize={undefined} onResizeCapture={undefined}>
            {!loading && (
              <Button onClick={generateImage} onResize={undefined} onResizeCapture={undefined}>
                Generate
              </Button>
            )}
            {img && (
              <Button onClick={oonfirmImage} onResize={undefined} onResizeCapture={undefined}>
                Confirm
              </Button>
            )}
          </Flex>
        </Stack>
      </Dialog>
    </>
  )
}
