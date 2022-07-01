import React, {useState} from 'react';
import {observer} from "mobx-react-lite";

import locationLogo from "../assets/images/inner-pages/location.png"
import contactLogo from "../assets/images/inner-pages/contact.png"
import clockLogo from "../assets/images/inner-pages/clockt.png"
import Swal from "sweetalert2";
import axios from "axios";


const Contact = observer (() => {

    const [userEmail, thisEmail] = useState();
    const [userPhone, thisPhone] = useState();
    const [userName, thisName] = useState();
    const [userReason, thisReason] = useState();
    const [userReasonText, thisReasonText] = useState();

    const token = "5518569135:AAHTpvxlnfT15iHzrTkphdM3ve6cIp-gwd4";
    const chatId = -613725994;


    function appeal(event) {
        event.preventDefault();
        if (userEmail == null){
            Swal.fire('Вы не ввелие запрашиваемые данные')
        }
        else {
            const data = `Email: ${userEmail} `
            const data2 = `Номер телефона: ${userPhone} `
            const data3 = `Имя: ${userName} `
            const data4 = `Причина: ${userReason} `
            const data5 = `Описание: ${userReasonText} `
            axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}${data2}${data3}${data4}${data5}`)
                .then(response => {
                    Swal.fire('Спасибо за обращение, мы свяжемся с вами как можно быстрее!')
                    event.target.reset()
                }, error => {
                    Swal.fire('Вы не ввели Email')
                })
        }
    }

    return (
        <>

            <section className="pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className= "text-center wow fadeInUp animated">
                                <h2>Контакты</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page-info pt-120 pb-60">
                <div className="container">
                    <div className="row mt--30">
                        <div className="col-xl-4 col-lg-6 wow fadeInUp animated">
                            <div className="contact-page-info__single mt-30">
                                <div className="thumb"><img src={locationLogo} alt="..." /></div>
                                <div className="contact-box">
                                    <h4>Адресс</h4>
                                    <p className="text1">г.Ульяновск, <br/>ул.Рябикова,д.70</p>
                                    <p className="text2">ТЦ «Альянс»</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeInUp animated">
                            <div className="contact-page-info__single mt-30">
                                <div className="thumb"><img src={contactLogo} alt="..." /></div>
                                <div className="contact-box">
                                    <h4>Контакты</h4>
                                    <ul>
                                        <li>
                                            <p>Номер: <a href="tel:123456789">+7(123) 456-78-90</a></p>
                                        </li>
                                        <li>
                                            <p>Горячая линия: <a href="tel:123456789">+7(123) 456-78-90</a></p>
                                        </li>
                                        <li>
                                            <p>E-mail: <a href="mailto:yourmail@email.com">karte@google.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeInUp animated">
                            <div className="contact-page-info__single mt-30 ">
                                <div className="thumb"><img src={clockLogo} alt="" /></div>
                                <div className="contact-box">
                                    <h4>Часы работы</h4>
                                    <p className="text1">Буднии: 08:30 - 20:00</p>
                                    <p className="text2">Выходные: 09:30 - 21:30</p>
                                    <p className="text3">Без перерывов на обед</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-box pt-60 pb-120">
                <div className="container">
                    <div className="row g-0 background align-items-center wow fadeInUp animated">
                        <div className="col-lg-5">
                            <div className="map">
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A36cf0fdf024b86935e73a1b76a73fb45da5e63bd93fa8646f42d952a8172a1ab&amp;source=constructor"
                                    width="400" height="400" frameBorder="0" loading="lazy"/>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form">
                                <h3>Есть вопросы?</h3>
                                <h5>Свяжитесь с нами!</h5>
                                <br/>
                                <form onSubmit={appeal} className="common-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><label htmlFor="name">Ваше имя</label>
                                                <input type="text" id="name" className="form-control" placeholder="Введите имя" onChange={e => thisName(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><label htmlFor="number">Номер телефона </label>
                                                <input type="text" id="number" className="form-control" placeholder="+7(123)456-78-90" onChange={e => thisPhone(e.target.value)} required pattern="[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><label htmlFor="email">Email </label>
                                                <input type="text" id="email" className="form-control" placeholder="email@gmail.com" onChange={e => thisEmail(e.target.value)} required/></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><label htmlFor="subject">Причина обращения </label>
                                                <input type="text" id="subject" className="form-control" placeholder="Меня интересует..." onChange={e => thisReason(e.target.value)} required/></div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group m-0"><label htmlFor="email"> Распишите подробнее о проблеме
                                                 </label>
                                                <textarea placeholder="У меня..." onChange={e => thisReasonText(e.target.value)} /></div>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn--primary style2 " />
                                    <input type="hidden" name="act" value="order" />


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Contact;