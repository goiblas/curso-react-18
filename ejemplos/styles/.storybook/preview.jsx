// import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import ThemeProvider from '../src/components/ThemeProvider';
import GlobalStyles from '../src/components/GlobalStyles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    Story => (
      <ThemeProvider>
        <GlobalStyles />
        <Story />
      </ThemeProvider>  
    ),
  ],
};

export default preview;
