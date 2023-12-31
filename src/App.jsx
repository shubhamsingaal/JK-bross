import { useEffect } from 'react';
import './App.css'
import { Home, LandingPage, SignUp, VerificationScreen, AccountScreen, EmailScreen, PVerification, PSignup, PAccount, Profile, TrackOrder, VerifyIdentity, OrderDetails, OrderProgress, OrderOngoing, OrderOngoing3 } from './pages';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
       
        <Route path="/paccount" element={< PAccount />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/tracking" element={<TrackOrder />}/>
        <Route path="/emailscreen" element={<EmailScreen />} />
        <Route path="/verifyidentity" element={<VerifyIdentity />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/orderprogress" element={<OrderProgress />} />
        <Route path="/orderongoing" element={<OrderOngoing />} />
        <Route path="/orderongoing3" element={<OrderOngoing3 />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
