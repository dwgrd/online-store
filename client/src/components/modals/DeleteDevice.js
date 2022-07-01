import { Modal, Button, Form, Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE, HTTP_ADRESS } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { fetchOneDevice, deleteOneDevice } from "../../http/deviceApi";

import { useState } from "react";
import { observer } from "mobx-react-lite";

const DeleteDevice = observer(({ show, onHide }) => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [findDevice, setfindDevice] = useState("");
  const searchDevice = (id) => {
    fetchOneDevice(id).then((data) => setfindDevice(data));
  };

  const deleteDevice = async () => {
    await deleteOneDevice(id);
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Удаление устройства
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex">
          <Form.Control
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder={"Введите Id устройства"}
            type="number"
            min={1}
          />
          <a className="btn--primary style2" onClick={() => searchDevice(id)}>
            Поиск
          </a>
        </Form>
        {findDevice ? (
          <Card
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Col md={4}>
              <Image
            src={HTTP_ADRESS + findDevice.img}
            style={{width: 100, height: 100, cursor: "pointer"}}
            onClick={() => {
              navigate(DEVICE_ROUTE + "/" + findDevice.id);
            }}
            />
            </Col>
            <Col md={4}>Название: {findDevice.name}</Col>
            <Col md={4}>Цена: {findDevice.price}₽</Col>
          </Card>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn--primary style2" onClick={onHide}>
          Закрыть
        </button>
        <button className="btn--primary style2" onClick={deleteDevice}>
          Удалить
        </button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteDevice;
