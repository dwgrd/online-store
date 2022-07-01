import React from 'react';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {CONTACT_ROUTE} from "../utils/consts";

const Help = observer (() => {
    return (
        <>
            <section className="pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="text-center wow fadeInUp animated">
                                <h2>FAQ</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-box pt-120 pb-120 ">
                <div className="container">
                    <div className="row g-0 mt--30 justify-content-lg-between justify-content-center">
                        <div className="col-lg-12">
                            <div className="accordion mt-30 " id="accordionExample">

                                <div className="accordion-item m-0 wow fadeInUp animated">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button"
                                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="true" aria-controls="collapseTwo"> Как моя посылка была отправлена?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse show"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p> Опции доставки посылки отображается в трек номере, а так же в статусе заказа, если вы не видите его, обратитесь на нашу горячую  или напрямую в офис. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp animated">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">Почему в моем номере отслеживания указана доставка 2 дня, 3 дня?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Скорее всего курьеры не могут доставить товар в связи с непредвиденными условиями и или место доставки находится слишком далеко от место старта курьера.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp animated">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour"> Как долго будет идти посылка?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p> Всё зависит от множества факторов, но не более чем месяц, если ваша посылка идёт более чем месяц, обратитесь на горячую линию или напрямую в офис. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp animated">
                                    <h2 className="accordion-header" id="headingseven">
                                        <button
                                            className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseseven" aria-expanded="false"
                                            aria-controls="collapseseven"> Как происходит возврат товара?
                                        </button>
                                    </h2>
                                    <div id="collapseseven" className="accordion-collapse collapse"
                                         aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Мы приезжаем и забираем товар на экспертизу и проводим анализ для дальнейших действий, если технка с гарантией и ремонтоспособна, то мы её чиним и отправляем вам, если нет и она на гарантии, то мы высылаем сумму товара по чеку.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp animated">
                                    <h2 className="accordion-header" id="headingeight">
                                        <button
                                            className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseeight" aria-expanded="false"
                                            aria-controls="collapseeight"> Как я узнаю, что моя посылка отправлена?
                                        </button>
                                    </h2>
                                    <div id="collapseeight" className="accordion-collapse collapse"
                                         aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>При оформлении заказа после оплаты вам выдадут трек номер где будет отслеживаться перемещение посылки, если вам не выдали трек норме, обратитесь на нашу горячую  или напрямую в офис.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp animated">
                                    <h2 className="accordion-header" id="headingnine">
                                        <button
                                            className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsenine" aria-expanded="false"
                                            aria-controls="collapsenine"> Почему некоторые продукты недоступны для отправки на международном уровне?
                                        </button>
                                    </h2>
                                    <div id="collapsenine" className="accordion-collapse collapse"
                                         aria-labelledby="headingnine"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Значит, что некий товар не может быть переправлен в другую страну по таможенным причинам, если вы уверены в своей правоте и товар может быть перевезён, обратитесь на нашу горячую  или напрямую в офис.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-banner mb-120">
                <div className="container auto-container background pt-120 pb-120 position-relative">
                    <div className="faq-banner-shape-1 d-lg-block d-none "><img
                        src="../assets/images/shape/services-banner-shape-1.png" alt="" /></div>
                    <div className="faq-banner-shape-2 d-lg-block d-none "><img
                        src="../assets/images/shape/services-banner-shape-2.png" alt="" /></div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="inner">
                                <h1>Вам еще нужна помощь?</h1><br/><br/>
                                <NavLink to={CONTACT_ROUTE} className="btn--primary style2 ">Свяжитесь с нами</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Help;