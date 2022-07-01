import React from 'react';
import {observer} from "mobx-react-lite";

import shape from "../assets/images/shape/about-v1-shape2.png"
import konsul from "../assets/images/prodaveckonsul.jpg"
import konsul2 from "../assets/images/prodaveckonsul2.jpg"
import konsul3 from "../assets/images/prodaveckonsul3.jpg"
import brand_logo_1 from "../assets/images/brand/brand-logo-1.png";
import brand_logo_2 from "../assets/images/brand/brand-logo-2.png";
import brand_logo_3 from "../assets/images/brand/brand-logo-3.png";
import brand_logo_4 from "../assets/images/brand/brand-logo-4.png";
import brand_logo_5 from "../assets/images/brand/brand-logo-5.png";

const AboutUs = observer (() => {
    return (
       <>

           <section className="pt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-xl-12">
                           <div className= "text-center wow fadeInUp animated">
                               <h2>О нас</h2>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section className="about pt-120 pb-120">
               <div className="container">
                   <div className="row g-0 about__background align-items-center justify-content-lg-between justify-content-center">
                       <div className="about__content text-center">
                           <div className="shape2"><img src={shape} alt="" />
                           </div>
                           <div className="title wow fadeInUp animated">
                               <h6>Karte</h6>
                               <h2>Высочайшее качество<br />Товара</h2>
                           </div>
                           <div className="text wow fadeInUp animated">
                               <p>Мы на рынке более 10 лет, имеем влияние не только по всей России, но и по всей европе, наш магазин славился всегда хорошими отзывами, репутацией и словом. В год возвращают менее 2% товара. Рады помогать нашим клиентам и не только. Ждём вас в нашем магазине!</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section className="mission">
               <div className="shape2"><img src={shape} alt=""/></div>
               <div className="auto-container container mission__background pt-120 pb-120">
                   <div className="container">
                       <div className="row mt--30 align-items-center justify-content-center">
                           <div className="col-lg-6 col-md-10 mt-30">
                               <div className="mission__content text-lg-start text-center">
                                   <h2 className=" wow fadeInUp animated">Наша миссия</h2>
                                   <p className=" wow fadeInUp animated">Внести как можно наиболее обширный вклад в IT-сообщество, а так же стать самой лучшей сетью магазинов по всей Европе!</p>
                               </div>
                           </div>

                           <div className="col-lg-6 mt-30">
                               <div className="mission__thumb wow fadeInRight animated"><img
                                   src="../assets/images/inner-pages/mission-v1-img1.jpg" alt="..."/>
                                   <div className="content-box">
                                       <div className="icon"><i className="flaticon-quote"/></div>
                                       <h3>Успех обычно приходит к тем, кто слишком занят, чтобы его искать</h3>
                                       <div className="author-box">
                                           <h5>Инокентий Петров <span> Директор Karte Shop </span></h5>
                                       </div>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
           </section>

           <section className="team pt-120 pb-120">
               <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-xl-6 col-lg-9">
                           <div className="section-head text-center wow fadeInUp animated">
                               <h2 className="title">Мы гордимся тем, что у нас работают высококвалифицированные специалисты.</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row justify-content-center">

                       <div className="col-xl-4 col-lg-4 col-md-6 col-10 wow fadeInUp ">
                           <div className="team__single mt-30 ">
                               <img src={konsul2} alt=""/>
                           </div>
                       </div>

                       <div className="col-xl-4 col-lg-4 col-md-6 col-10 wow fadeInUp ">
                           <div className="team__single mt-30 ">
                               <img src={konsul} alt=""/>
                           </div>
                       </div>

                       <div className="col-xl-4 col-lg-4 col-md-6 col-10 wow fadeInUp ">
                           <div className="team__single mt-30 ">
                               <img src={konsul3} alt=""/>
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
       </>
    );
});

export default AboutUs;