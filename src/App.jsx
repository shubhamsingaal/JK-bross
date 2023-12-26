import './App.css'
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { LandingPage, SignUp, VerificationScreen } from './pages';

function App() {

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/verification-screen":
        title = "";
        metaDescription = "";
        break;
      case "/loginsignup":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/verification-screen" element={<VerificationScreen />} />
      <Route path="/loginsignup" element={<SignUp />} />
    </Routes>
  )
}

export default App
