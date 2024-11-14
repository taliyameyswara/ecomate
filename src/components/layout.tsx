import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Loading from "./loading";
import Footer from "./footer";

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const hideNavbarPaths = ["/login", "/register"];

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {!loading && !hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <main>{loading ? <Loading /> : <Outlet />}</main>
      {!loading && !hideNavbarPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
