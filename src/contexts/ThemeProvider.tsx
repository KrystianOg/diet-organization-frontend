import { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

// prettier-ignore
const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
                primary: {
                    main: '#FF781F',
                    dark: '#FF6600',
                    light: '#FFAF7A',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#11823B',
                    light: '#91F086',
                    dark: '#004D25',
                }
			}
			: {
				// palette values for dark mode
                primary: {
                    main: '#FF781F',
                    dark: '#FF6600',
                    light: '#FFAF7A',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#11823B',
                    light: '#91F086',
                    dark: '#004D25',
                },
                background: {
                    default: '#000A06',
                    paper: '#000604'
                },
			}
		),
	},
    shape: {
        borderRadius: 16
    }
});

const ThemeProvider = ({ children }: Props) => {
	const [mode] = useLocalStorage<PaletteMode>("color-mode", "dark");

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
