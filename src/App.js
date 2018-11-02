import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
// import axios from 'axios'

import { fetchMe } from './store/actions'
import { store } from './store'

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
  componentDidMount() {
    store.dispatch(fetchMe())
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    )
  }
}
