import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming/create";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: "#F4F5F7" },
      light: { ...themes.normal, appBg: "#131316" },
    },
  },
};

export default preview;

