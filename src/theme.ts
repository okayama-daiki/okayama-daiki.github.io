import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import "@fontsource/sacramento/index.css";

const customConfig = defineConfig({
  globalCss: {
    ul: {
      paddingLeft: "1.5rem", // In default setting, ul must not have padding
    },
  },
  theme: {
    tokens: {
      fonts: {
        sacramento: {
          value: "Sacramento, cursive",
          description: "Sacramento font from @fontsource/sacramento",
        },
      },
    },
  },
});

export const customSystem = createSystem(defaultConfig, customConfig);
