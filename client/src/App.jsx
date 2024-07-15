import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/sign-in" element={<SignIn />} />
      <Route path ="/sign-up" element={<SignUp />} />
      <Route path ="/contact" element={<Contact />} />
      <Route path ="/profile/:id" element={<Profile />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
