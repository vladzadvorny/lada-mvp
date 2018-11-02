import React from 'react'
import { Provider } from 'react-redux'
// import axios from 'axios'

import { fetchMe } from './store/actions'
import { store } from './store'

import Navigation from './screens'

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
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
