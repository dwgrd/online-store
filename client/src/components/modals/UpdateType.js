import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { fetchTypes, updateType } from "../../http/deviceApi";
import { Context } from "../../index";
import { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

const UpdateType = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    if (show) {
      fetchTypes().then((data) => device.setTypes(data));
    }
  }, [show]);

  const updateOneType = async (id, name) => {
    await updateType({ id, name });
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Редактировать тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle className="btn--primary style2">{type.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item onClick={() => setType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a className="btn--primary style2" onClick={onHide}>
          Закрыть
        </a>
        <a
            className="btn--primary style2"
          onClick={() => updateOneType(type.id, name)}
        >
          Обновить
        </a>
      </Modal.Footer>
    </Modal>
  );
});

export default UpdateType;
