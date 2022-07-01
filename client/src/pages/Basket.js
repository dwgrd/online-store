import { observer } from "mobx-react-lite";
import React, {useEffect, useContext} from "react";
import { Context } from "../index";
import { fetchBasket, deleteAll } from "../http/basketApi";
import BasketItem from "../components/BasketItem";
import {NavLink} from "react-router-dom";
import {BASKETORDER_ROUTE, CONTACT_ROUTE, SHOP_ROUTE} from "../utils/consts";


const Basket = observer(() => {

  const { basketStore } = useContext(Context);
  useEffect(() => {
    fetchBasket().then((data) => basketStore.setBasket(data));
  }, []);
  const clearBasket = () => {
    deleteAll();
    basketStore.setBasket([]);
  };


  return (
      <>
        <section className="pt-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="text-center wow fadeInUp animated">
                  <h2>Корзина</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {!basketStore.basket.length ? (
        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="text-center wow fadeInUp animated">
                  <h4>Ваша корзина пуста</h4>
                </div>
                <div className="wow fadeInUp animated text-center">
                  <NavLink to={SHOP_ROUTE} className="btn--primary mt-30 mx-3" >В магазин</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>): (
        <section className="cart-area pt-120 pb-120">
          <div className="container">
            <div className="row wow fadeInUp animated">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="cart-table-box">
                  <div className="table-outer">
                    <table className="cart-table">
                      <thead className="cart-header">
                      <tr>
                        <th className="">Название</th>
                        <th className="price">Цена</th>
                        <th>Количество</th>
                        <th className="hide-me"/>
                      </tr>
                      </thead>
                      <tbody>
                    {basketStore.basket.map((item) => {
                      return <BasketItem key={item.id} item={item} />;
                    })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="cart-button-box">
                  <div className="cart-button-box-left wow fadeInUp animated">
                    <button className="btn--primary mt-30 mx-3" type="submit" onClick={() => clearBasket()}>Удалить всё</button>
                  </div>
                  <div className="cart-button-box-right wow fadeInUp animated">
                    <NavLink to={SHOP_ROUTE} className="btn--primary mt-30 mx-3">Продолжить покупки</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="cart-button-box">
                  <div className="cart-button-box-left wow fadeInUp animated">
                    <NavLink to={BASKETORDER_ROUTE} className="btn--primary mt-30 mx-3">Оформить заказ</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
      </>
  );
});

export default Basket;
