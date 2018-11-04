import React, { Component } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

import BoardingLogo from '../components/BoardingLogo'
import AuthButton from '../components/AuthButton'
import { colors } from '../constants/theme'
import { Provider } from '../utils/providers'
import { auth } from '../utils/auth'

class AuthScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start()
  }

  opacityAnim = () => {
    const { opacity } = this.state

    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: 100
    }).start()
  }

  positionAnim = () => {
    const { position } = this.state

    Animated.timing(position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  onGooglePress = async () => {
    try {
      const token = await Provider.Google.loginAsync()

      await auth(token, 'GOOGLE')
      console.log('token', token)
    } catch (error) {
      console.log('error', error)
    }
  }

  onFacebookPress = async () => {
    try {
      const token = await Provider.Facebook.loginAsync()

      await auth(token, 'FACEBOOK')
      console.log('token', token)
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {
    const { position, opacity } = this.state

    const logoTranslate = position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    })

    return (
      <View style={styles.main}>
        <Animated.View
          style={{
            flex: 1.1,
            justifyContent: 'center',
            transform: [
              {
                translateY: logoTranslate
              }
            ]
          }}
        >
          <BoardingLogo />
        </Animated.View>

        <Animated.View style={{ flex: 0.9, width: '100%', opacity }}>
          <AuthButton type="google" onPress={this.onGooglePress}>
            Google
          </AuthButton>
          <AuthButton type="facebook" onPress={this.onFacebookPress}>
            Facebook
          </AuthButton>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  }
})

export default AuthScreen
