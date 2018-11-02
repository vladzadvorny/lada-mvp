import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { images } from '../constants/images'
import { freeSpace, colors } from '../constants/theme'

export default () => (
  <View style={styles.main}>
    <Image source={images.logo} style={styles.image} />
    <Text
      style={[
        styles.text,
        {
          fontSize: 26,
          marginBottom: 1
        }
      ]}
    >
      Интуитивное
    </Text>
    <Text
      style={[
        styles.text,
        {
          fontSize: 22
        }
      ]}
    >
      Питание
    </Text>
  </View>
)

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: freeSpace
  },
  text: {
    color: colors.primary
  }
})
