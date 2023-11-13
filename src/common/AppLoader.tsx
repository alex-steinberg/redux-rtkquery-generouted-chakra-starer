import React from "react"
import { keyframes } from "@emotion/react"
import { Box, useColorModeValue } from "@chakra-ui/react"
import LoaderLogo from "../assets/images/loader.svg?react"

const loaderSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLoader = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
      data-testid="loader"
    >
      <Box animation={`${loaderSpin} infinite 2.5s linear`}>
        <LoaderLogo
          className="loader-logo"
          style={{
            height: "8rem",
            fill: "#ffe81f",
          }}
        />
      </Box>
    </Box>
  )
}

export default AppLoader
