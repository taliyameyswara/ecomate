import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Cafe from "./pages/cafe";
import Profile from "./pages/profile";
import Shop from "./pages/shop";
import Tutorial from "./pages/tutorial";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

export const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cafe" element={<Cafe />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/tutorial" element={<Tutorial />} />
    </Route>
  )
);
