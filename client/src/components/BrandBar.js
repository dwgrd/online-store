import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (


  <div className="single-sidebar-box mt-30 wow fadeInUp animated">
    <h4>Бренды</h4>
    <div className="checkbox-item">
      <form>
        <div className="form-group">
          <ul>
            {device.brands.map((brand) => (
                <li onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}>{brand.name}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  </div>
  );
});

export default BrandBar;
