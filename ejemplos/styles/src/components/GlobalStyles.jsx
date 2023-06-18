import { Global, css, useTheme } from '@emotion/react';

export default function GlobalStyles() {
    const theme = useTheme();

  return (<Global
    styles={css`
      body {
        margin: 0;
        color: ${theme.text};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    `}
  />)
};
