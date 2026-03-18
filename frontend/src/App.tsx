import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/logins/Login"
import Dashboard from "./pages/dashboard/Dashborad"
import NotFound from "./pages/NotFound/NotFound"
import Usuarios from "./pages/usuarios/Usuarios"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createAccount" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trends" element={<Dashboard />} />
      <Route path="/users" element={<Usuarios />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
