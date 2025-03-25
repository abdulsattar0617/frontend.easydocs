import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./GoogleLogin";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useState } from "react";
import RefrshHandler from "./RefreshHandler";
import NotFound from "./NotFound";
// require("dotenv").config();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const GoogleWrapper = () => (
    // <GoogleOAuthProvider clientId="87344777779-6al5bf9lt99d9km2qohv44bgkvtd5nd3.apps.googleusercontent.com">
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <GoogleLogin></GoogleLogin>
    </GoogleOAuthProvider>
  );
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
