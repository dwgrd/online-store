import React from 'react';
import {observer} from "mobx-react-lite";

const Track = observer (() => {
    return (
        <>
            <section className="pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className= "text-center wow fadeInUp animated">
                                <h2>Отслеживание товара</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="order-track pt-120 pb-120">
                <div className="container">
                    <div className="inner">
                        <div className="text wow fadeInUp animated">
                            <p>Чтобы отследить свой заказ, пожалуйста, нажмите кнопку "Отследить". Далее введите трек номер полученный после заказа товара. После вы сможете увидеть место нахождения вашего заказа и то через сколько он будет на пункте выдачи.</p>
                        </div>
                        <form className="common-form wow fadeInUp animated">
                            <div className="order-track-button text-center">
                                <a href="https://www.pochta.ru/tracking" className="btn--primary style2">Отследить</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Track;