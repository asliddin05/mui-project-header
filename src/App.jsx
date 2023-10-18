import { Route, Routes } from "react-router-dom"
import { PATHS } from "./config/site-path"
import { Home } from "./pages/home"
import MainLayout from "./layout/main-layout/main-layout"
function App() {

  return (
    <>
    <Routes>
      <Route path={PATHS.home} element={<MainLayout />}>
        <Route index element={<Home /> } />
      </Route>
    </Routes>
    </>
  )
}

export default App
