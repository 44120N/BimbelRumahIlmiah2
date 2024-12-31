import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from "@mui/material";

export default function ColorPalette(props) {
    let black_blue = "#151855";
    let secondary = "#009688";
    let tertiary = "#e53935";
    let quaternary = "#ffa000";

    let white = "#c9dcfa";
    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            black_blue: theme.palette.augmentColor({
                color: {
                    main: black_blue,
                },
                name: "black_blue",
            }),
            secondary: theme.palette.augmentColor({
                color: {
                    main: secondary,
                },
                name: "secondary",
            }),
            tertiary: theme.palette.augmentColor({
                color: {
                    main: tertiary,
                },
                name: "tertiary",
            }),
            quaternary: theme.palette.augmentColor({
                color: {
                    main: quaternary,
                },
                name: "quaternary",
            }),
            white: theme.palette.augmentColor({
                color: {
                    main: white,
                },
                name: "white",
            }),
        },
    });
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
