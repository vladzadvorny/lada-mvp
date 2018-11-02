import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { colors, fontSize, borderRadius } from '../constants/theme'
import { images } from '../constants/images'

export default ({ children, type, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        backgroundColor: colors[type],
        width: '60%',
        alignSelf: 'center',
        padding: 7,
        borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
      }}
    >
      <View
        style={{
          position: 'relative',
          backgroundColor: colors.white,
          width: 18 + 6,
          height: 18 + 6,
          borderRadius,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {type === 'google' && (
          <Image
            source={images.google}
            style={{ width: 18, height: 18, resizeMode: 'contain' }}
          />
        )}
        {type === 'facebook' && (
          <FontAwesome
            name="facebook"
            color={colors.facebook}
            size={20}
            style={{ position: 'absolute', right: 3, bottom: -2 }}
          />
        )}
      </View>

      <Text style={{ color: colors.white, fontSize: fontSize.md }}>
        {children}
      </Text>
    </View>
  </TouchableOpacity>
)
