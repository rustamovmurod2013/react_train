import { BrowserRouter, Route, Routes } from "react-router-dom"
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const TeacherStudent = React.lazy(() => import("./pages/TeacherStudent"))
const Login = React.lazy(() => import("./pages/Login"))
import Layout from "./components/Layout"
import React, { useState } from "react"


function App() {

  const [auth, setAuth] = useState(localStorage.getItem("auth") || false)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={auth ? <Layout setAuth={setAuth} /> : <Login setAuth={setAuth} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<TeacherStudent />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App