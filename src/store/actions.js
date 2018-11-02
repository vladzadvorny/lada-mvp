// import axios from 'axios'

// import { baseUrl } from '../constants/config'
import { SET_ME } from './types'

export const setMe = payload => ({
  type: SET_ME,
  payload
})

// https://stackoverflow.com/questions/34403269/what-is-the-best-way-to-deal-with-a-fetch-error-in-react-redux
// export const fetchMe = () => dispatch => {
//   dispatch({
//     type: FETCH_ME
//   })

//   axios
//     .get(`${baseUrl}/me`)
//     .then(res => {
//       const { data } = res
//       console.log(data)

//       dispatch({
//         type: `${FETCH_ME}_SUCCESS`,
//         payload: { data }
//       })
//     })
//     .catch(error => {
//       dispatch({
//         type: `${FETCH_ME}_FAIL`,
//         payload: {
//           error: error.response
//             ? {
//                 code: error.response.status,
//                 name: error.response.data
//               }
//             : {
//                 code: null,
//                 name: 'Network Error'
//               }
//         }
//       })
//     })
// }
