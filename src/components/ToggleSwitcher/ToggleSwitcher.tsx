import { type FC, memo } from 'react'
import DarkIcon from 'src/assets/icons/theme-dark.svg'
import LightIcon from 'src/assets/icons/theme-light.svg'
import {useTheme} from "src/shared/providers/themeProvider/lib/useTheme.ts";
import {Themes} from "src/shared/providers/themeProvider/lib/themeContext.ts";


const ToggleSwitch: FC = memo(() => {
    const { theme, handleTheme } = useTheme()

    return (
        <button
                onClick={handleTheme}>
            {theme === Themes.LIGHT ? <LightIcon /> : <DarkIcon />}
        </button>
    )
});

export default ToggleSwitch
