import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;

        font-size: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .container {
        max-width: 120rem;
        margin: 0 auto;
    }

    .left {
        width: 50%;
    }

    .right {
        width: 50%;
    }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
