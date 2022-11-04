import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './api'
// other imports 

export const store = configureStore({
    reducer: {

        [api.reducerPath]: api.reducer
    },
    devTools: true,
    middleware: [api.middleware]
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch