import React, { Component } from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import { NavigationService } from '../utils/navigationService'

const AuthNavigator = createStackNavigator(
  {
    Auth: {
      getScreen: () => require('./AuthScreen').default
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default
    },
    Error: {
      getScreen: () => require('./ErrorScreen').default
    },
    Auth: AuthNavigator,
    Main: {
      getScreen: () => require('./MainScreen').default
    }
  },
  {
    initialRouteName: 'Splash'
  }
)

class Navigation extends Component {
  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}

export default Navigation
