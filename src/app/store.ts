import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './api'
import { theme } from '../features'
// other imports 

export const store = configureStore({
    reducer: {
        theme,
        [api.reducerPath]: api.reducer
    },
    devTools: true,
    middleware: [api.middleware]
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch