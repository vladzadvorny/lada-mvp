import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ErrorScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Error Screen</Text>
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

export default ErrorScreen
