import { FC, ReactNode } from "react"
import { Outlet } from "react-router-dom"
import LogoSVG from "../assets/images/logo.svg?react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const headerStyle = {
  color: "white",
  width: "100%",
  position: "relative",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
}

const AppContainer: FC<{ children: ReactNode }> = () => {
  return (
    <>
      <header
        // @ts-expect-error
        style={headerStyle}
      >
        <LogoSVG
          style={{
            fill: "#ffe81f",
            width: "100%",
            maxWidth: "45rem",
          }}
        />
        <ColorModeSwitcher />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppContainer
