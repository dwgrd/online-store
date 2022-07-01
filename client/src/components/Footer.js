import React, {useState} from 'react';
import {observer} from "mobx-react-lite";

import footerShape from "../assets/images/shape/footer-shape-1.png"
import logo from  "../../src/assets/images/logo/logo-2.png"
import logoPay1 from "../assets/images/payment_method/payment_2.png"
import logoPay2 from "../assets/images/payment_method/payment_3.png"
import logoPay3 from "../assets/images/payment_method/payment_4.png"
import vkLogo from "../assets/images/vk_icon.png"
import tgLogo from "../assets/images/tg_logo.png"
import vbLogo from "../assets/images/vb_logo.png"
import axios from "axios";
import * as Swal from "sweetalert2";
import {NavLink} from "react-router-dom";
import {ABOUTUS_ROUTE, CONTACT_ROUTE, HELP_ROUTE, MAIN_ROUTE, TRACK_ROUTE} from "../utils/consts";




const Footer = observer(() => {
    const [userEmail, thisUserEmail] = useState();
    const token = "5475042988:AAGrVI8IXi0xJ2lPnr7obqMhbTUAQmYM6X8";
    const chatId = -1001586166770;


    function subs(event) {
        event.preventDefault();
        if (userEmail == null){
            Swal.fire('Any fool can use a computer')
        }
        else {
            const data = `Email: ${userEmail} подписался`
            axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}`)
                .then(response => {
                    Swal.fire('Вы подписались на рассылку')
                    event.target.reset()
                }, error => {
                    Swal.fire('Вы не ввели Email')
                })
        }
    }

    return (
        <>
            <footer className="footer-default">
                <div className="footer-default__shap_1 position-absolute ">
                    <img src={footerShape} alt="..." />
                </div>

                <div className="footer-default__main-footer position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                                <div className="footer-default__single-box">
                                    <div className="company-info">
                                        <div className="footer-logo">
                                            <NavLink to={MAIN_ROUTE}><img src={logo} alt="..." /></NavLink>
                                        </div>
                                        <div className="text1">
                                            <p>г. Ульяновск, ул.Рябикова, д.70 <br /> ТЦ «Альянс»</p>
                                        </div>
                                        <div className="text2">
                                            <p>г. Ульяновск, ул.Минаева, д.11 <br /> ТЦ «Спартак»</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                                <div className="footer-default__single-box">
                                    <div className="footer-title">
                                        <h4>Информация</h4>
                                    </div>
                                    <ul className="footer-links">
                                        <li><NavLink to={ABOUTUS_ROUTE}>О нас</NavLink></li>
                                        <li><NavLink to={CONTACT_ROUTE}>Контакты</NavLink></li>
                                        <li><NavLink to={HELP_ROUTE}>Помощь</NavLink></li>
                                        <li><NavLink to={TRACK_ROUTE}>Отслеживание товара</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                                <div className="footer-default__single-box">
                                    <div className="footer-title">
                                        <h4>Новостная рассылка</h4>
                                    </div>
                                    <div className="footer-newsletter">
                                        <p className="text">Введите свой адрес электронной почты, чтобы получать
                                            последние обновления о наших продуктах и рекламных акциях.</p>

                                        <form id="sub_foot" onSubmit={subs} className="footer-default__subscrib-form">
                                            <div className="footer-input-box">
                                                <input type="email" placeholder="Email" onChange={e => thisUserEmail(e.target.value)} name="email" required/>
                                                <button type="submit" className="subscribe_btn">Подписаться</button>
                                            </div>
                                        </form>

                                        <div className="newsletter-bottom d-flex align-items-center">
                                            <div className="footer-title-box">
                                                <p>Подпишитесь на нас:</p>
                                            </div>
                                            <div className="footer__medio-boxx  medio-boxx  d-flex align-items-center">
                                                <ul>
                                                    <li><a href="https://vk.com/" target="_blank" className="active"><img src={vkLogo} alt=""/></a></li>
                                                    <li><a href="https://web.telegram.org" target="_blank"><img src={tgLogo} alt="..."/></a></li>
                                                    <li><a href="https://www.viber.com/ru/" target="_blank"><img src={vbLogo} alt="..."/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom position-relative">
                    <div className="container">
                        <div className="footer_bottom_content">
                            <div className="copyright wow fadeInUp animated">
                                <p>© 2022 <NavLink to={MAIN_ROUTE}>Karte.</NavLink> Все права защищены.</p>
                            </div>
                            <div className="footer-payment wow fadeInUp animated">
                                 <img className="px-1" src={logoPay1} alt="payment" />
                                 <img className="px-1" src={logoPay2} alt="payment" />
                                 <img className="px-1" src={logoPay3} alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
});

export default Footer;