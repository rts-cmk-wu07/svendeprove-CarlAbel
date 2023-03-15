import { BrowserRouter, Routes, Route } from "react-router-dom"
import Velkommen from "./pages/Velkommen"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ActivitiesDetails from "./pages/ActivitiesDetails"
import Search from "./pages/Search"




function App() {


  return (
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
          <Route path="/activities/:id" element={<ActivitiesDetails />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App