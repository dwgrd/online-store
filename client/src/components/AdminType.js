import { observer } from "mobx-react-lite";
import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";

import CreateType from "./modals/CreateType";

import DeleteType from "./modals/DeleteType";
import UpdateType from "./modals/UpdateType";

const AdminType = observer(() => {
  const [createVisible, setCreateVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);

  return (
      <>
    <Card
      className="d-flex flex-column"
      style={{ width: "80%", margin: "auto", padding: 15, marginTop: 15 }}
    >
      <h3 className="text-black text-center pb-60 pt-60">Типы</h3>
      <button
        className="btn--primary style1"
        onClick={() => setCreateVisible(true)}
      >
        Добавить тип
      </button>
      <button
        className="btn--primary style1"
        onClick={() => setDeleteVisible(true)}
      >
        Удалить тип
      </button>
      <button className="btn--primary style1"
        onClick={() => setUpdateVisible(true)}
      >
        Изменить тип
      </button>

      <CreateType show={createVisible} onHide={() => setCreateVisible(false)} />
      <DeleteType show={deleteVisible} onHide={() => setDeleteVisible(false)} />
      <UpdateType show={updateVisible} onHide={() => setUpdateVisible(false)} />
    </Card>
      </>
  );
});

export default AdminType;
