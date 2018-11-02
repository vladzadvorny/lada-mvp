import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Auth Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AuthScreen
