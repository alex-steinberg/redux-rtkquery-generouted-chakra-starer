import { Outlet } from "react-router-dom"
import "../App.css"
import AppContainer from "../common/AppContainer"

function App() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  )
}

export default App
