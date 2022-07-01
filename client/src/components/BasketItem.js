import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import React, { useContext, useState } from "react";

import { DEVICE_ROUTE, HTTP_ADRESS } from "../utils/consts";
import {
  deleteOneBasket,
  fetchBasket,
  increment,
  decrement,
} from "../http/basketApi";

const BasketItem = observer(({ item }) => {
  const navigate = useNavigate();

  const { basketStore } = useContext(Context);
  const deleteOne = (id) => {
    deleteOneBasket(id);
    fetchBasket().then((data) => basketStore.setBasket(data));
  };
  const incrementCount = async (id) => {
    await increment(id);
    const basket = basketStore.basket.map((el) =>
      el.id === id ? { ...el, count: el.count + 1 } : el
    );
    basketStore.setBasket(basket);
  };
  const decrementCount = async (id) => {
    await decrement(id);
    const basket = basketStore.basket.map((el) => {
      if (el.id === id && el.count > 1) {
        return { ...el, count: el.count - 1 };
      }
      return el;
    });
    basketStore.setBasket(basket);
  };


  return (
        <tr>
          <td>
            <div className="thumb-box"><a href="#" className="thumb">
              <img src={HTTP_ADRESS + item.img} alt="..." onClick={() => {navigate(DEVICE_ROUTE + "/" + item.id)}}/>
            </a>
              <h5>{item.name}</h5>
            </div>
          </td>
          <td>{item.price}₽</td>
          <td className="qty">
            <div className="qtySelector text-center justify-content-center">
              <span className="decreaseQty" onClick={() => decrementCount(item.id)}><i className="flaticon-minus"/></span>
              <h5>{item.count}</h5>
              <span className="increaseQty" onClick={() => incrementCount(item.id)}><i className="flaticon-plus"/></span>
            </div>
          </td>
          <td>
            <div className="remove" onClick={() => deleteOne(item.id)}><i className="flaticon-cross"/></div>
          </td>
        </tr>

  );
});

export default BasketItem;
