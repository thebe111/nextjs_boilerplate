import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
   layout: "centered"
}

export const decorators = [
   (Story) => {
      return (
         <ChakraProvider theme={theme}>
            <Story />
         </ChakraProvider>
      )
   }
]
