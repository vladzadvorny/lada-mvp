import React from 'react'
import { Provider } from 'react-redux'
import { NativeModules, Text } from 'react-native'
import { Font } from 'expo'
// import axios from 'axios'

import { store } from './store'
import { chacheImages } from './utils/cacheImages'
import { images } from './constants/images'

import Navigation from './screens'
import Loading from './components/Loading'
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     console.log('Network Error', !error.response)

//     console.log('Error status', error.response.status)
//     if (error.response.status === 401) {
//       console.log(401)
//     }

//     return Promise.reject(error)
//   }
// )

export default class App extends React.Component {
  state = {
    isReady: false
  }

  componentDidMount() {
    const { UIManager } = NativeModules
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    //

    this.cacheAssets()
  }

  cacheAssets = async () => {
    const imagesAssets = chacheImages([...Object.values(images)])
    await Promise.all([...imagesAssets])

    await Font.loadAsync({
      Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf')
    })

    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state

    if (!isReady) {
      return <Loading />
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
