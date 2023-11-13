import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { Routes } from "@generouted/react-router"
import { store } from "./app/store"
import theme from "./theme"
import "./index.css"
import { ErrorBoundary } from "react-error-boundary"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong...</div>}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Routes />
        </ChakraProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
