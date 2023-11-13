import { useColorMode, IconButton } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={
        colorMode === "light" ? <MoonIcon color="brand.500" /> : <SunIcon />
      }
    />
  )
}

export { ColorModeSwitcher }
