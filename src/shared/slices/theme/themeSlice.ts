import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'currentTheme',
    initialState: { value: "light" },
    reducers: {
        switchTheme: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer
