import { Context } from "../index";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  ABOUTUS_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE, CONTACT_ROUTE, HELP_ROUTE,
  LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE,
  SHOP_ROUTE, TRACK_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import logo from  "../../src/assets/images/logo/logo.png"
import vkLogo from "../assets/images/vk_icon.png"
import tgLogo from "../assets/images/tg_logo.png"
import vbLogo from "../assets/images/vb_logo.png"

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", "");
  };
  return (
      <>
        <header className="header-default">
          <div className="menubox">

          <div className="top-info d-flex">
            <div className="container">
              <div className="row g-0 ">
                <div className="col-12">
                  <div className="top-info__top-content d-flex align-items-center justify-content-between">
                    <div className="medio-boxx">
                      <ul>
                        <li><a href="https://vk.com/" target="_blank" className="active"><img src={vkLogo} alt=""/></a></li>
                        <li><a href="https://web.telegram.org" target="_blank"><img src={tgLogo} alt="..."/></a></li>
                        <li><a href="https://www.viber.com/ru/" target="_blank"><img src={vbLogo} alt="..."/></a></li>
                      </ul>
                    </div>
                    <span className="international-shopping d-lg-block d-none ">БЕСПЛАТНАЯ ДОСТАВКА СВЫШЕ 10000₽. ДОСТУПНА МЕЖДУНАРОДНАЯ ДОСТАВКА. </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="d-flex">
              <div className="container">
                <div className="row g-0 ">
                  <div className="col-12">
                    <div className="text-center pt-30 pb-30">
                      <NavLink to={MAIN_ROUTE} className="logo"><img src={logo} alt="..." /></NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div><hr/>

            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="true" aria-label="Toggle navigation">
                  <div className="menubar">
                    <span className="navbar-toggler-icon"/>
                    <span className="navbar-toggler-icon"/>
                    <span className="navbar-toggler-icon"/>
                  </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="mega-menu">
                    <div className="container position-relative">
                      <div className="row">
                        <nav>
                          <ul className="page-dropdown-menu d-flex flex-wrap">
                            <li className="dropdown-list"><NavLink to={MAIN_ROUTE}><span>Главная</span></NavLink></li>
                            <li className="dropdown-list"><NavLink to={SHOP_ROUTE}><span>Товары</span></NavLink></li>
                            <li className="dropdown-list"><NavLink to={ABOUTUS_ROUTE}><span>О нас</span></NavLink></li>
                            <li className="dropdown-list"><NavLink to={CONTACT_ROUTE}><span>Контакты</span></NavLink></li>
                            <li className="dropdown-list"><NavLink to={HELP_ROUTE}><span>Помощь</span></NavLink></li>
                            <li className="dropdown-list"><NavLink to={TRACK_ROUTE}><span>Отслеживание товара</span></NavLink></li>
                            {user.isAuth ? (
                                <li className="dropdown-list"><a onClick={() => logOut()}><span><b>Выйти из профиля</b></span></a></li>
                            ):(
                                <>
                                  {user.userRole === "ADMIN" ? null: <li className="dropdown-list"><NavLink to={LOGIN_ROUTE}><span><b>Авторизация</b></span></NavLink></li>}
                                  {user.userRole === "ADMIN" ? null: <li className="dropdown-list"><NavLink to={REGISTRATION_ROUTE}><span><b>Регистрация</b></span></NavLink></li>}
                                </>
                            )}
                              {user.isAuth ?
                                  <>
                                    {user.userRole === "ADMIN" ? (<li className="dropdown-list"><a onClick={() => navigate(ADMIN_ROUTE)}><i className="flaticon-user"/></a></li>): null}
                                    <li className="dropdown-list"><a onClick={() => navigate(BASKET_ROUTE)}><i className="flaticon-shopping-cart"/></a></li>
                                  </> : null}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header><hr/>
      </>
  );
});

export default NavBar;
