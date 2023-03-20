// Importerer nødvendige komponenter fra "react-router-dom" biblioteket
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importerer forskellige komponenter fra sider og komponentmapperne
import Welcome from "./pages/Welcome"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ActivitiesDetails from "./pages/ActivitiesDetails"
import Search from "./pages/Search"
import Login from "./pages/Login"

// Importerer TokenProvider fra contexts mappen
import TokenProvider from "./contexts/TokenProvider"

// Importerer yderligere sider og ProtectedRoute-komponenten
import Calendar from "./pages/Calendar"
import ProtectedRoute from "./components/ProtectedRoute"
import CalendarInstructor from "./pages/CalendarIntructor"

function App() {
  return (
    // TokenProvider bruges til at give adgang til "autentificeringsdata" i hele appen
    <TokenProvider>
      {/* // BrowserRouter bruges til at håndtere routingen mellem de forskellige komponenter */}
      <BrowserRouter>
        {/* // Routes definerer de forskellige routes, der er tilgængelige i appen */}
        <Routes>
          {/* // Hovedruten, som enten viser Welcome-page eller Layout-page, afhængigt af om brugeren er logget ind eller ej*/}
          <Route
            path="/"
            element={
              sessionStorage.getItem("key") !== "true" ? <Welcome /> : <Layout />
            }
          >
            {/* // Forskellige under routes, der er tilgængelige i appen */}
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route path="/calendar/:id" element={<ProtectedRoute><CalendarInstructor /></ProtectedRoute>} />
            <Route path="/activities/:id" element={<ActivitiesDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  )
}

export default App