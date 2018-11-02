import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default () => (
  <View style={styles.main}>
    <ActivityIndicator size="large" />
  </View>
)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
