import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from "../index";
import {fetchBasket} from "../http/basketApi";
import Swal from "sweetalert2";
import axios from "axios";


const BasketOrder = observer(() => {
    const { basketStore } = useContext(Context);

    const [userName, thisName] = useState();
    const [userSurname, thisSurname] = useState();
    const [userTelephone, thisTelephone] = useState();
    const token = "5502804139:AAF9MgITi3jTbO1jfMMrF-I9F9rt0WQJfEI";
    const chatId = -792006539;


    function orderB(event) {
        event.preventDefault();
        const data3 = `Имя: ${userName} `
        const data4 = `Фамилия: ${userSurname} `
        const data5 = `Номер телефона: ${userTelephone} `
        axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data3}${data4}${data5}${data5}`)
            .then(response => {
                Swal.fire('Ваш заказ принят, ожидайте трек-кода и звонка.')
                event.target.reset()
            }, error => {
                Swal.fire('Вы не ввели Email')
            })

    }
    useEffect(() => {
        fetchBasket().then((data) => basketStore.setBasket(data));
    }, []);
    return (
        <>
            <section className="pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className= "text-center wow fadeInUp animated">
                                <h2>Оформление заказа</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart-area pt-120 pb-120">
                <div className="container">
                    <div className="row wow fadeInUp animated">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="cart-table-box">
                                <div className="table-outer">
                                    <h4>Оформляем:</h4><br/>
                                        {basketStore.basket.map((item) => {
                                            return <div key={item.id} item={item} >
                                                <h5>{item.name} на сумму {item.price} руб. в колличестве {item.count} шт.</h5><br/>
                                            </div>;
                                        })}
                                    <form onSubmit={orderB} className="form form-check">
                                        <div className="input-box">
                                            <input className=" mt-5" onChange={e => thisName(e.target.value)} type="name" placeholder="Введите имя" required/>
                                            <input className=" mt-5" onChange={e => thisSurname(e.target.value)} type="surname" placeholder="Введите фамилию" required/>
                                            <input className=" mt-5" onChange={e => thisTelephone(e.target.value)} type="tel" placeholder="Введите телефон (12345678910)" required pattern="[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"/>
                                            <div className="leadOn">
                                                <h4 className="text-center me-3 mt-5" type="button">Временно весь товар на самовывоз!</h4>
                                            </div>

                                            <div className="payment">
                                                <h4 className="text-center me-3 mt-5">Оплата только наличными на руки курьеру!</h4>
                                            </div>
                                        </div>
                                        <button className="btn--primary mt-30 mx-3 text-center" type="submit">Оформить заказ</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default BasketOrder;