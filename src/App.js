import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, LandingPage, SignIn, SignUp, Services } from "./pages";
import { Navbar } from "./components";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import ReviewEvents from "./pages/ReviewEvents/ReviewEvents";
import CreateService from "./pages/CreateService/CreateService";
import MyServices from "./pages/MyServices/MyServices";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import ServiceForCustomer from "./pages/ServiceForCustomer/ServiceForCustomer";
import VendorDetails from "./pages/VendorDetails/VendorDetails";
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const hiddenNavbarRoutes = [
    "/signin",
    "/signup",
    "/",
    "/home",
  ];
  // Conditionally render Navbar based on the route
  const showNavbar = !hiddenNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="p-2 bg-color-primary">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/review-events" element={<ReviewEvents />} />
          <Route path="/my-services" element={<MyServices />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/service-details/:id" element={<ServiceForCustomer />} />
          <Route path="/vendor-details/:id" element={<VendorDetails />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
