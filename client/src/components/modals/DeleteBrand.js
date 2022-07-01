import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { fetchBrands, deleteOneBrand } from "../../http/deviceApi";
import { Context } from "../../index";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

const DeleteBrand = observer(({ show, onHide, type }) => {
  const { device } = useContext(Context);
  useEffect(() => {
    if (show) {
      fetchBrands().then((data) => device.setBrands(data));
    }
  }, [show]);

  const deleteBrand = () => {
    deleteOneBrand(device.selectedBrand.id).then(device.setSelectedBrand({}));
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >Удалить бренд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle className="btn--primary style2">
              {device.selectedBrand.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a className="btn--primary style2" onClick={onHide}>
          Закрыть
        </a>
        <a className="btn--primary style2" onClick={deleteBrand}>
          Удалить
        </a>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteBrand;
