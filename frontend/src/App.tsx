import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/logins/Login"
import Dashboard from "./pages/dashboard/Dashborad"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
