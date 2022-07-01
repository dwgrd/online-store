import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { DEVICE_ROUTE, HTTP_ADRESS } from "../utils/consts";
import React, { useContext, useEffect, useState } from "react";

const DeviceItem = observer(({ item }) => {
  const navigate = useNavigate();
  const { device, user } = useContext(Context);
  const brand = device.brands.find((el) => el.id === item.brandId).name;

  return (
        <div className="col-xl-4 col-lg-6 col-6">
          <div className="products-three-single w-100  mt-30">
            <div className="products-three-single-img" onClick={() => {navigate(DEVICE_ROUTE + "/" + item.id);
            }}>
              <a href="#" className="d-block">
                <img src={HTTP_ADRESS + item.img} alt="..."/>
              </a>
              <div className="products-grid__usefull-links pb-120">
                <ul>
                  <li>
                    <a>
                      <i className="flaticon-star-1"/>
                      <span>{Number(item.AvgRating).toFixed(1)}</span>
                    </a>
                  </li>

                  {user.userRole === "ADMIN" ? (
                  <li>
                    <a>
                      <i className="flaticon-heart"/>
                      <span>#{item.id}</span>
                    </a>
                  </li>):null}

                </ul>
              </div>
              <a href="#" className="addcart btn--primary style2">Подробнее</a>
            </div>

            <div className="products-three-single-content text-center">
              <span>{brand}</span>
              <h5>{item.name}</h5>
              <p>{item.price}₽</p>
            </div>
          </div>
        </div>
  );
});

export default DeviceItem;
