import './App.css'
import { Home, LandingPage, SignUp, VerificationScreen, AccountScreen, EmailScreen, PVerification, PSignup, PAccount } from './pages';
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
        <Route path="/psignup" element={<PSignup />} />
        <Route path="/pverification" element={< PVerification/>} />
        <Route path="/emailscreen" element={< EmailScreen />} />
        <Route path="/paccount" element={< PAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
