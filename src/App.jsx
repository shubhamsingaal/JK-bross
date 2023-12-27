import './App.css'
import { Home, LandingPage, SignUp, VerificationScreen, AccountScreen } from './pages';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/verification" element={<VerificationScreen />} />
        <Route path="/loginsignup" element={<SignUp />} />
        <Route path="/account" element={<AccountScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
