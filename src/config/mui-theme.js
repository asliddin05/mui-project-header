import { createTheme } from '@mui/material/styles';
import { COLORS } from './color'
export const theme = createTheme({
    breakpoints: {
        values: {
            lg: 1720,
        }
    },
    typography: {
        font: {
            fontFamily: ["Bebas Neue", "sans-serif"].join(","),
        },
        h2: {
            color: `${COLORS.black}`,
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontWeight: 400,
            letterSpacing: "1.8px",
        },
        body1: {
            color: `${COLORS.black}`,
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
        }
    }
})