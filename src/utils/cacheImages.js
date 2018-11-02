import { Image } from 'react-native'
import { Asset } from 'expo'

export const chacheImages = images =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    }
    return Asset.fromModule(image).downloadAsync()
  })
