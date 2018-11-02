import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

import { baseUrl } from '../constants/config'
import { setMe } from '../store/actions'

import Loading from '../components/Loading'

class SplashScreen extends Component {
  componentWillMount() {
    this.bootstrapAsync()
  }

  bootstrapAsync = async () => {
    /* eslint-disable no-shadow */
    const { navigation, setMe } = this.props

    // await AsyncStorage.removeItem('@token')
    // await AsyncStorage.setItem(
    //   '@token',
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWJkMWJiNTY5YzI4NDYzNmIyMDkyYjJkIiwibmFtZSI6IkVsaXphYmV0aCJ9LCJpYXQiOjE1NDEwOTQwMjksImV4cCI6MTU3MjYzMDAyOSwiaXNzIjoiaUVhdGluZyJ9.NOtjTcuPD9Y57jiqZVfH79bP3VSVjokfwzxS3C0rp8Y'
    // )
    const token = await AsyncStorage.getItem('@token')

    if (!token) {
      navigation.navigate('Auth')
      return
    }

    try {
      const { data } = await axios.get(`${baseUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setMe({ ...data, token })
      navigation.navigate('Main')
      return
    } catch (error) {
      navigation.navigate('Auth')
    }
  }

  render() {
    return <Loading />
  }
}

const mapDispatchToProps = {
  setMe
}

export default connect(
  null,
  mapDispatchToProps
)(SplashScreen)
