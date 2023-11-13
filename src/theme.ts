import { extendTheme, defineStyleConfig } from "@chakra-ui/react"

const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "2xl",
  },
})
const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
  },
})

const mainColor = "#ffe81f"

const theme = extendTheme({
  fonts: {
    heading: "'Nunito Sans', sans-serif",
    body: "'Nunito Sans', sans-serif",
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    brand: {
      50: "#fffde7", // lightest
      100: "#fffacc",
      200: "#fff6b0",
      300: "#fff294",
      400: "#ffed78",
      500: mainColor, // default brand color
      600: "#e6cb29",
      700: "#ccb423",
      800: "#b39e1d",
      900: "#998717", // darkest
    },
    white: { 100: "#FFFFFF" },
  },
  components: {
    Text,
    Heading,
  },
})

export default theme
