import { Context } from "../index";
import {NavLink, useParams} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { fetchOneDevice } from "../http/deviceApi";
import { addToBasket } from "../http/basketApi";
import {HTTP_ADRESS, SHOP_ROUTE} from "../utils/consts";
import { getAvgRating, addRating } from "../http/ratingApi";
import StarRating from "../components/StarRating/StarRating";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const { user } = useContext(Context);

  const addRate = async (index) => {
    await addRating({ deviceId: id, rate: index });
    getAvgRating(id).then((data) =>
      setRating(Number(data.avgRating).toFixed(1))
    );
  };

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
    getAvgRating(id).then((data) =>
      setRating(Number(data.avgRating).toFixed(1))
    );
  }, []);

  return (
      <>
        <section className="shop-details-breadcrumb wow fadeInUp animated overflow-hidden ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="shop-details-inner">
                  <ul className="shop-details-menu">
                    <li><NavLink to={SHOP_ROUTE}>Товары</NavLink></li>
                    <li className="active">{device.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-details-top">
          <div className="container">
            <div className="row mt--30">

              <div className="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated ">
                <div className="single-product-box two">
                  <div className="big-product single-product-two slider-for">
                    <div>
                      <div className="single-item">
                        {device.img ? (<img src={HTTP_ADRESS + device.img} alt="..."/>) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
                <div className="shop-details-top-right two">
                  <div className="shop-details-top-right-content-box">
                    <div className="shop-details-top-title m-0">
                      <h3>{device.name}</h3>
                      <div>
                        {user.userRole === "ADMIN" ? (<>ID товара - #{device.id}</>) : null}
                      </div>
                    </div>
                    <div className="shop-details-top-review-box">
                      <div className="shop-details-top-review">
                        {rating}
                        <span className="star">&#9733;</span>
                      </div>
                    </div>
                    <div className="shop-details-top-price-box d-flex align-items-center flex-wrap ">
                      <h3 className="pe-1">{device.price}₽</h3>
                    </div>
                    <div className="shop-details-top-price-box d-flex align-items-center flex-wrap ">
                      <StarRating addRate={addRate}/>
                    </div>
                    <div className="shop-details-top-cart-box-btn">
                      <button className="btn--primary style2" onClick={() => addToBasket({ deviceId: Number(id) })}>Добавить в корзину</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="product pt-60 pb-120 wow fadeInUp overflow-hidden ">
          <div className="container ">
            <div className="row">
              <div className="col-12 wow fadeInUp animated">
                <ul className="nav product-details-nav nav-two nav-pills justify-content-center" id="pills-tab-two"
                    role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active"
                            id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description"
                            type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                      Характеристики
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-additional-tab"
                            data-bs-toggle="pill" data-bs-target="#pills-additional" type="button" role="tab"
                            aria-controls="pills-additional" aria-selected="false"> Вопрос-ответ
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row wow fadeInUp animated">
              <div className="tab-content" id="pills-tabContent-two">
                <div className="tab-pane fade show active" id="pills-description" role="tabpanel"
                     aria-labelledby="pills-description-tab">
                  <div className="product-drescription">
                    <div className="row align-items-center">
                      <div className="col-lg-12 mt-30">
                        <h4>Характеристики:</h4>
                        {device.info.map((info, index) => (
                        <ul className="drescription-list" key={info.id}>
                          <li>{info.title} : {info.description}</li>
                        </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-additional" role="tabpanel" aria-labelledby="pills-additional-tab">
                  <div className="product-drescription">
                    <div className="row align-items-center">
                      <div className="col-lg-12 mt-30">
                        <h4>Вопрос-ответ:</h4>
                        <ul className="drescription-list">
                          <li> 1. Гарантия на всё 1 год.</li>
                          <li> 2. Ремонт бесплатный.</li>
                          <li> 3. Доставка быстрая.</li>
                          <li> 4. Качество отличное!</li>
                          <li> 5. Проверенные поставщики.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
  );
};

export default DevicePage;
