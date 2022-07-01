import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { fetchOneDevice, updateDevice } from "../../http/deviceApi";
import DeviceForm from "../DeviceForm";

const UpdateDevice = observer(({ show, onHide }) => {
  const [id, setId] = useState("");
  const [findDevice, setfindDevice] = useState("");
  const [updatedDevice, setUpdatedDevice] = useState({});

  const searchDevice = (id) => {
    fetchOneDevice(id).then((data) => setfindDevice(data));
  };
  console.log(updatedDevice);
  const putDevice = async (device) => {
    console.log(device.file);
    const formData = new FormData();
    formData.append("id", `${device.id}`);
    formData.append("name", device.name);
    formData.append("price", `${device.price}`);
    formData.append("img", device.file);
    formData.append("brandId", device.brand.id);
    formData.append("typeId", device.type.id);
    formData.append("info", JSON.stringify(device.info));
    await updateDevice(formData);
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Редактировать устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex">
          <Form.Control
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder={"Enter id of Device"}
            type="number"
            min={1}
          />
          <a className="btn--primary style2" onClick={() => searchDevice(id)}>
            Поиск
          </a>
        </Form>
        {findDevice ? (
          <DeviceForm
            item={findDevice}
            updateDevice={(device) => setUpdatedDevice(device)}
          />
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <a className="btn--primary style2" onClick={onHide}>
          Закрыть
        </a>
        <a
            className="btn--primary style2"
          onClick={() => putDevice(updatedDevice)}
        >
          Обновить
        </a>
      </Modal.Footer>
    </Modal>
  );
});

export default UpdateDevice;
