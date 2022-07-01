import { Modal, Button, Form } from "react-bootstrap";
import { createBrand, fetchBrands } from "../../http/deviceApi";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
const CreateBrand = ({ show, onHide }) => {
  const [brand, setBrand] = useState("");
  const { device } = useContext(Context);
  useEffect(() => {
    if (show) {
      fetchBrands().then((data) => device.setBrands(data));
    }
  }, [show]);
  const addBrand = async () => {
    await createBrand({ name: brand });
    setBrand("");
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder={"Введите название бренда"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a  className="btn--primary style2" onClick={onHide}>
          Удалить
        </a>
        <a className="btn--primary style2" onClick={addBrand}>
          Добавить
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
