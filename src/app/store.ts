import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './api'
import { theme } from '../features'
// other imports 

const thunk = (store: any) => (next: any) => (action: any) =>
    typeof action === 'function'
        ? action(store.dispatch, store.getState)
        : next(action)

export const store = configureStore({
    reducer: {
        theme,
        [api.reducerPath]: api.reducer
    },
    devTools: true,
    middleware: [thunk, api.middleware]
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch