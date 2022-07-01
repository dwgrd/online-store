import { observer } from "mobx-react-lite";
import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";

import CreateDevice from "./modals/CreateDevice";
import DeleteDevice from "./modals/DeleteDevice";
import UpdateDevice from "./modals/UpdateDevice";

const AdminDevice = observer(() => {
  const [createVisible, setCreateVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  return (
      <>
        <Card
          className="d-flex flex-column"
          style={{ width: "80%", margin: "auto", padding: 15, marginTop: 15 }}
        >
          <h3 className="text-black text-center pb-60 pt-60">Мониторы</h3>
          <button
              className="btn--primary style1"
            onClick={() => setCreateVisible(true)}
          >
            Добавить устройство
          </button>
          <button
              className="btn--primary style1"
            onClick={() => setDeleteVisible(true)}
          >
            Удалить устройство
          </button>
          <button
            onClick={() => setUpdateVisible(true)}
            className="btn--primary style1"
          >
            Редактировать устройство
          </button>

          <CreateDevice
            show={createVisible}
            onHide={() => setCreateVisible(false)}
          />
          <DeleteDevice
            show={deleteVisible}
            onHide={() => setDeleteVisible(false)}
          />
          <UpdateDevice
            show={updateVisible}
            onHide={() => setUpdateVisible(false)}
          />
        </Card>
      </>
  );
});

export default AdminDevice;
