import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store'

interface ThemeState {
    colorMode: PaletteMode
}

const localValue = localStorage.getItem('color-mode')
const initialState = { colorMode: localValue ? JSON.parse(localValue) : 'light' } as ThemeState

const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<PaletteMode>){
            state.colorMode = action.payload
            localStorage.setItem('color-mode', JSON.stringify(action.payload))
        },
        toggleTheme: (state) => {
            state.colorMode = state.colorMode === 'dark' ? 'light' : 'dark'
            localStorage.setItem('color-mode', JSON.stringify(state.colorMode === 'dark' ? 'light' : 'dark'))
        }
    }
})

export const selectCurrentTheme = (state: RootState) => state.theme.colorMode

export const { setTheme, toggleTheme } = slice.actions
export default slice.reducer