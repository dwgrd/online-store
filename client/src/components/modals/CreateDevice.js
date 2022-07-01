import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { fetchBrands, fetchTypes, createDevice } from "../../http/deviceApi";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (show) {
      fetchTypes().then((data) => device.setTypes(data));
      fetchBrands().then((data) => device.setBrands(data));
    }
  }, [show]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  const addDevice = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    await createDevice(formData);
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
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
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 mb-2"
            placeholder={"Введите название устройства"}
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-2 mb-2"
            placeholder={"Введите цену устройства"}
            type="number"
          />
          <Form.Control
            className="mt-2 mb-2"
            placeholder={"Выберите файл"}
            type="file"
            onChange={selectFile}
          />
        </Form>
        <button className="btn--primary style2" onClick={addInfo}>
          Добавить новое свойство
        </button>
        {info.map((i) => (
          <Row key={i.number} className="mt-2 mb-2">
            <Col md={4}>
              <Form.Control
                value={i.title}
                onChange={(e) => changeInfo("title", e.target.value, i.number)}
                placeholder={"Введите заголовок "}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                value={i.description}
                onChange={(e) =>
                  changeInfo("description", e.target.value, i.number)
                }
                placeholder={"Введите описание"}
              />
            </Col>
            <Col md={4}>
              <button className="btn--primary style2" onClick={() => removeInfo(i.number)}>Удалить</button>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn--primary style2" onClick={onHide}>
          Закрыть
        </button>
        <button className="btn--primary style2" onClick={addDevice}>
          Добавить
        </button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
