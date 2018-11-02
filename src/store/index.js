import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
)

export { store }
