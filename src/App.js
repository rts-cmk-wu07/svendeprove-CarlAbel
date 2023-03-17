import { BrowserRouter, Routes, Route } from "react-router-dom"
import Velkommen from "./pages/Velkommen"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ActivitiesDetails from "./pages/ActivitiesDetails"
import Search from "./pages/Search"
import Login from "./pages/Login"
import TokenProvider from "./contexts/TokenProvider"
import Calendar from "./pages/Calendar"
import ProtectedRoute from "./components/ProtectedRoute"
import CalendarInstructor from "./pages/CalendarIntructor"

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
            <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route path="/activities/:id" element={<ActivitiesDetails />} />
            <Route path="/calendar/:id" element={<CalendarInstructor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  )
}

export default App