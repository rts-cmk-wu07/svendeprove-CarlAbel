import { BrowserRouter, Routes, Route } from "react-router-dom"
import Velkommen from "./pages/Velkommen"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ActivitiesDetails from "./pages/ActivitiesDetails"
import Search from "./pages/Search"
import Login from "./pages/Login"
import TokenProvider from "./contexts/TokenProvider"



function App() {


  return (
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              sessionStorage.getItem("key") !== "true" ? <Velkommen /> : <Layout />
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/activities/:id" element={<ActivitiesDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  )
}

export default App