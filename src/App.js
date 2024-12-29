import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, Services, SignIn, SignUp } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const hiddenNavbarRoutes = ["/signin", "/signup"];
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
          <Route path="/our-services" element={<Services />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
