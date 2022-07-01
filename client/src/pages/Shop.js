import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState, useMemo, $ } from "react";
import debounce from "lodash.debounce";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState('"createdAt" DESC');
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, inputValue, filter, 1, device.limit).then(
      (data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      }
    );
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      inputValue,
      filter,
      device.page,
      device.limit
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [
    device.page,
    device.selectedType,
    device.selectedBrand,
    inputValue,
    filter,
  ]);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(changeInput, 1000), []);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);



  return (
  <>
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="pb-60 text-center wow fadeInUp animated">
              <h2>Товары</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="product-grid pt-60 pb-120">
      <div className="container">
        <div className="row gx-4">
          <div className="col-xl-3 col-lg-4">

              <div className="sidebar-holder">
                <form className="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
                  <div className="p-0">
                    <input type="email" placeholder="Поиск по товарам" name="email" onChange={debouncedChangeHandler} />
                  </div>
                  <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                    <h4>Сортировка</h4>
                    <div className="checkbox-item">
                      <form>
                        <div className="form-group">
                          <select className="wide" value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value='"createdAt" DESC' >От новых к старым</option>
                            <option value='"createdAt" ASC' >От старых к новым</option>
                            <option value="price ASC">От дешёвых к дорогим</option>
                            <option value="price DESC">От дорогих к дешёвым</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </form>
                <BrandBar />
                <TypeBar/>
              </div>
            </div>


          <div className="col-xl-9 col-lg-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                  <DeviceList/>
                </div>
                <Pages />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
});

export default Shop;
