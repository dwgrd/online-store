import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (

      <>
          <div className="single-sidebar-box mt-30 wow fadeInUp animated ">
          <h4>Типы</h4>
          <div className="checkbox-item">
              <form>
                  <div className="form-group">
                      <ul>
                          {device.types.map((type) => (
                          <li
                              active={type.id === device.selectedType.id}
                              onClick={() => device.setSelectedType(type)}
                              key={type.id}>
                              {type.name}</li>
                          ))}
                      </ul>
                  </div>
              </form>
          </div>
        </div>
          <div className="mt-30 wow fadeInUp animated ">
              <div className="checkbox-item">
                  <form>
                      <div className="form-group">
                          <a className="btn--primary style1" active={!device.selectedType.id && !device.selectedBrand.id}
                                  onClick={() => {
                                      device.setSelectedType({});
                                      device.setSelectedBrand({});
                                  }}>
                              Все товары
                          </a>
                      </div>
                  </form>
              </div>
          </div>
      </>
  );
});

export default TypeBar;
