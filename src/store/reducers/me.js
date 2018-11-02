import _ from 'lodash'
import { FETCH_ME } from '../types'

const initialState = {
  data: {},
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ME:
      return _.assign(state, {
        loading: true
      })

    case `${FETCH_ME}_SUCCESS`:
      return _.assign(state, {
        data: action.payload.data,
        loading: false
      })

    case `${FETCH_ME}_FAIL`:
      return _.assign(state, {
        error: action.payload.error,
        loading: false
      })

    default:
      return state
  }
}
