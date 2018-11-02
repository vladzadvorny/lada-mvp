import axios from 'axios'

import { baseUrl } from '../constants/config'
import { FETCH_ME } from './types'

// https://stackoverflow.com/questions/34403269/what-is-the-best-way-to-deal-with-a-fetch-error-in-react-redux
export const fetchMe = () => dispatch => {
  dispatch({
    type: FETCH_ME
  })

  axios
    .get(`${baseUrl}/me`)
    .then(res => {
      const { data } = res
      console.log(data)

      dispatch({
        type: `${FETCH_ME}_SUCCESS`,
        payload: { data }
      })
    })
    .catch(error => {
      dispatch({
        type: `${FETCH_ME}_FAIL`,
        payload: {
          error: error.response
            ? [error.response.status, error.response.data]
            : [null, 'Network Error']
        }
      })
    })
}
