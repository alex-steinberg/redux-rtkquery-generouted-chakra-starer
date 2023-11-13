import { Navigate } from "../router"

const HomePage = () => {
  return <Navigate to="/films" replace={true} />
}

export default HomePage
