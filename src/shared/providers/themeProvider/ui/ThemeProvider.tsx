import {ReactNode, useMemo, useState} from 'react'
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from '../lib/themeContext'
import {ReactFC} from "src/shared/types/projectSchema.ts";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT

const ThemeProvider: ReactFC = ( children: ReactNode) => {
    const [theme, setTheme] =
        useState<Themes>(defaultTheme)

    const defaultProps =
        useMemo(() => ({
            theme,
            setTheme
        }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
