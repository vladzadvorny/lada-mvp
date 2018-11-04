import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native'

import { baseUrl } from '../constants/config'
import { NavigationService } from './navigationService'

export const auth = async (token, provider) => {
  try {
    const { data } = await axios.post(`${baseUrl}/me/auth`, {
      token,
      provider
    })

    if (!data.token) {
      throw new Error()
    }

    await AsyncStorage.setItem('@token', data.token)
    NavigationService.navigate('Splash')
  } catch (error) {
    Alert.alert('Ошибка', 'Произошла какая-то ошибка. Попробуй снова')
  }
}
