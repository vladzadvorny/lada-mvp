import { Facebook as _Facebook, Constants } from 'expo'

const permissions = ['public_profile', 'email']

const loginAsync = async () => {
  try {
    const { type, token } = await _Facebook.logInWithReadPermissionsAsync(
      Constants.manifest.facebookAppId,
      { permissions }
    )

    if (type === 'success') {
      return Promise.resolve(token)
    }

    return Promise.reject(new Error('No success'))
  } catch (error) {
    return Promise.reject(error)
  }
}

export const Facebook = {
  loginAsync
}
