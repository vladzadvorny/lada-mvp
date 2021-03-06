import { NavigationActions } from 'react-navigation'

let _navigator // eslint-disable-line

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

// add other navigation functions that you need and export them

export const NavigationService = {
  navigate,
  setTopLevelNavigator
}
