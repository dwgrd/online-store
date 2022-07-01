import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { fetchTypes, deleteOneType } from "../../http/deviceApi";
import { Context } from "../../index";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

const DeleteType = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  useEffect(() => {
    if (show) {
      fetchTypes().then((data) => device.setTypes(data));
    }
  }, [show]);

  const deleteType = () => {
    deleteOneType(device.selectedType.id).then(() => {
      device.setTypes(
        device.types.filter((el) => el.id !== device.selectedType.id)
      );
      device.setSelectedType({});
    });
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Удаление типов
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle className="btn--primary style2">
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
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
        <a className="btn--primary style2" onClick={deleteType}>
          Удалить
        </a>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteType;
