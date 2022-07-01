import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

import brand_logo_1 from "../assets/images/brand/brand-logo-1.png";
import brand_logo_2 from "../assets/images/brand/brand-logo-2.png";
import brand_logo_3 from "../assets/images/brand/brand-logo-3.png";
import brand_logo_4 from "../assets/images/brand/brand-logo-4.png";
import brand_logo_5 from "../assets/images/brand/brand-logo-5.png";
import f_icon_1 from "../assets/images/icon/f-icon-1.png";
import f_icon_2 from "../assets/images/icon/f-icon-2.png";
import f_icon_3 from "../assets/images/icon/f-icon-3.png";
import f_icon_4 from "../assets/images/icon/f-icon-4.png";
import mon_img from "../assets/images/monitor.jpg"
import proek_img from "../assets/images/proektor.jpg"
import Swal from "sweetalert2";
import axios from "axios";

const Main = observer (() => {
    const [userEmailMain, thisUserEmailMain] = useState();
    const token = "5475042988:AAGrVI8IXi0xJ2lPnr7obqMhbTUAQmYM6X8";
    const chatId = -1001586166770;


    function subs(event) {
        event.preventDefault();
        if (userEmailMain == null){
            Swal.fire('Any fool can use a computer')
        }else {
            const data = `Email: ${userEmailMain} подписался`
            axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}`)
                .then(response => {
                    Swal.fire('Вы подписались на рассылку')
                    event.target.reset()
                }, error => {

                })
        }

    }

    return (
        <>
            <section className="categories-three overflow-hidden">
                <div className="auto-container container">
                    <div className="row">
                        <div className="categories-three__inner pt-120 pb-120">
                            <div className="row align-items-center justify-content-xl-start justify-content-center">
                                <div className="col-xl-4 col-md-7">
                                    <div
                                        className="categories-three__content text-xl-start text-center wow fadeInUp animated">
                                        <div className="sec-title-style2 style3">
                                            <h2>Товары по категориям</h2>
                                        </div>
                                        <p>В ассортименте представлены множество товаров по трём двум категориям, не упустите свою выгоды и приступите к покупкам прямо сейчас</p>
                                        <div className="btn-box">
                                            <NavLink to={SHOP_ROUTE} className="btn--primary style2">Смотреть товары</NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-8">
                                    <div className="row  justify-content-center">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="categories-three__list-item mt-30 wow fadeInUp animated">
                                                <div className="categories-three__list-item-inner">
                                                    <NavLink to={SHOP_ROUTE}>
                                                        <img src={mon_img} alt="..."/>
                                                    </NavLink>
                                                    <div className="title text-center">
                                                        <h4>Мониторы</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="categories-three__list-item mt-30 wow fadeInUp animated">
                                                <div className="categories-three__list-item-inner">
                                                    <NavLink to={SHOP_ROUTE}>
                                                        <img src={proek_img} alt="..."/>
                                                    </NavLink>
                                                    <div className="title text-center">
                                                        <h4>Проекторы</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-features pt-120 mb-60 overflow-hidden">
                <div className="container auto-container">
                    <div className="row mt--30">
                        <div className="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.2s">
                            <div className="core-features__box d-flex ms-0">
                                <span className="one"/>
                                <span className="two"/>
                                <div className="icon"><img src={f_icon_1} alt="..." /></div>
                                <div className="core-features__box-content">
                                    <a href="#" className="d-block">
                                        <h4> Безопасный Платеж </h4>
                                    </a>
                                    <p>Мы гарантируем безопасноть при любых платежах.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.3s">
                            <div className="core-features__box d-flex ">
                                <span className="one"/>
                                <span className="two"/>
                                <div className="icon">
                                    <img src={f_icon_2} alt="..." />
                                </div>
                                <div className="core-features__box-content"><a href="#" className="d-block">
                                    <h4>Быстрая доставка </h4>
                                </a>
                                    <p>Доставил в любую точку мира любой товар</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.4s">
                            <div className="core-features__box d-flex ">
                                <span className="one"/>
                                <span className="two"/>
                                <div className="icon">
                                    <img src={f_icon_3} alt="..." />
                                </div>
                                <div className="core-features__box-content"><a href="#" className="d-block">
                                    <h4> Возврат средств </h4>
                                </a>
                                    <p>Не угодил товар? Мы будем рады его заменить.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.5s">
                            <div className="core-features__box d-flex me-0">
                                <span className="one"/>
                                <span className="two"/>
                                <div className="icon">
                                    <img src={f_icon_4} alt="..." />
                                </div>
                                <div className="core-features__box-content"><a href="#" className="d-block">
                                    <h4> Супер Поддержка </h4>
                                </a>
                                    <p>Готовы ответить на вопросы в любое время.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partner-one">
                <div className="container wow fadeInUp animated">
                    <div className="row wow fadeInUp animated">
                        <div className="partnerslider d-flex">
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_1} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_2} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_3} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_4} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_5} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_1} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_2} alt="..." /></a>
                            <a href="#" className="partner-one__brand justify-content-center align-items-center">
                                <img src={brand_logo_3} alt="..." /></a>

                            </div>
                    </div>
                </div>
            </section>

            <section className="products-cetagory-three pt-60 overflow-hidden">
                <div className="auto-container container">
                    <div className="products-cetagory-three__inner">
                        <div className="row justify-content-center">
                            <div className="col-xxl-3 col-md-6 wow fadeInUp animated">
                                <div className="products-cetagory-three__single height-400 style2">
                                    <div className="inner h-100">
                                        <h3>Успейсте получить</h3>
                                        <h2>80 <span>% <br /> скидки</span></h2>
                                        <div className="btn-box"><span className="button">По коду:
                                            LOVEBITE</span></div>
                                        <p>Не пропустите: Срок действия скоро истечет.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetter-one border-0 style-two pt-60 pb-60 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="newsLetter-one__content-box d-flex align-items-center justify-content-md-start justify-content-center wow fadeInUp animated"
                                data-wow-delay="0.1s">
                                <div className="thumb"/>
                                <h3 className="t36"><span>Подпишите на </span> Новостную рассылку </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="newsLetter-one__content-box d-flex align-items-center justify-content-md-start justify-content-center wow fadeInUp animated "
                                data-wow-delay="0.2s">
                                <h6 className="text-md-start text-center"> Подпишитесь на нашу рассылку новостей, для получения последних новости мира техники и не только. </h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="newsLetter-one__content-box three d-flex align-items-center justify-content-md-start justify-content-center wow fadeInUp animated"
                                data-wow-delay="0.3s">
                                <form onSubmit={subs} className="form">
                                    <div className="newsLetter-one__subscribe-box">
                                        <input type="email" placeholder="Email" onChange={e => thisUserEmailMain(e.target.value)}  name="email" required/>
                                        <button type="submit" className="subscrib-btn">Подписатся</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Main;