import { Google as _Google, Constants } from 'expo'

const scopes = ['profile', 'email']

const loginAsync = async () => {
  try {
    const result = await _Google.logInAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      iosClientId: Constants.manifest.extra.googleAppId.ios,
      scopes
    })

    if (result.type === 'success') {
      return Promise.resolve(result.accessToken)
    }

    return Promise.reject(new Error('No success'))
  } catch (error) {
    return Promise.reject(error)
  }
}

export const Google = {
  loginAsync
}
