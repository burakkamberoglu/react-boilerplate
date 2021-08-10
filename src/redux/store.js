import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

import rootReducer from './reducers'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

const persistConfig = {
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_ENCRYPT_KEY
    })
  ],
  whitelist: ['login'],
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
      middlewares
    )
})

let persistor = persistStore(store)
export { store, persistor }
