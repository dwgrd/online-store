import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

const CreateType = ({ show, onHide }) => {
  const [type, setType] = useState("");
  const addType = () => {
    createType({ name: type }).then((data) => setType(""));
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a className="btn--primary style2" onClick={onHide}>
          Закрыть
        </a>
        <a className="btn--primary style2" onClick={addType}>
          Добавить
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
