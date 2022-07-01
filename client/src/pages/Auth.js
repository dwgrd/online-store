import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { registration, login } from "../http/userApi";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { Context } from "../index";
import {render} from "react-dom";


const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

    const border = {
      border: '1px solid'
    };



  return (
    <>
      <div className="login-page pt-120 pb-120 wow fadeInUp animated">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-9">
              <div className="login-register-form" style={border}>
                <div className="top-title text-center ">
                  <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                </div>
                <form className="common-form" >
                  <div className="form-group">
                    <input type="text" className="form-control" style={border} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                  <div className="form-group eye">
                    <input type="password" id="password-field" className="form-control" style={border} placeholder="Пароль"value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="checkk ">
                    {isLogin ? "У вас нету аккаунта?": "У вас есть аккаунт?"}{isLogin ? (<NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>) : (<NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>)}
                  </div>

                  {isLogin ? (<a type="submit" className="btn--primary style2" onClick={() => auth()}>Авторизация</a>) : (<a type="submit" className="btn--primary style2" onClick={() => auth()}>Регистрация</a>)}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Auth;
