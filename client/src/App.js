import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { check } from "./http/userApi";

import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import './assets/css/bootstrap.5.1.1.min.css'
import './assets/fonts/flaticon.css'
import './assets/css/plugin/animate.css'
import './assets/css/style.css'

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loader">
        <span>Karte...</span>
    </div>;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
