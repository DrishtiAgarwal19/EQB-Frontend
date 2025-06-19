import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import VenueDetails from "./VenueDetails";
import ForgotPassword from "./ForgotPassword";
import CodeVerification from "./CodeVerification";
import NewPassword from "./NewPassword";
import CustomerQuery from "./CustomerQuery";
import Wishlist from "./Wishlist";
import Home2 from "./Home2";
import ExploreDestinations from "./ExploreDestinations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/explore-destinations" element={<ExploreDestinations />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/venue/:id" element={<VenueDetails />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-verification" element={<CodeVerification />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/customer-query" element={<CustomerQuery />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/services/:serviceType" element={<div>Service Details Page</div>} />
    </Routes>
  );
}

export default App;
