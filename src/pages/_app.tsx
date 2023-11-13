import "../App.css"
import AppContainer from "../common/AppContainer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  )
}

export default App
