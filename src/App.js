import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, LandingPage, SignIn, SignUp, Services } from "./pages";
import { Navbar } from "./components";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const hiddenNavbarRoutes = ["/signin", "/signup", "/", "/our-services", "/create-event"];
  // Conditionally render Navbar based on the route
  const showNavbar = !hiddenNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="p-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
