import { SET_ME } from '../types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ME:
      return action.payload

    default:
      return state
  }
}
