import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";
import DeleteBrand from "./modals/DeleteBrand";
import CreateBrand from "./modals/CreateBrand";
import UpdateBrand from "./modals/UpdateBrand";

const AdminBrand = () => {
  const [createVisible, setCreateVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);

  return (
    <>

      <Card
        className="d-flex flex-column"
        style={{ width: "80%", margin: "auto", padding: 15, marginTop: 15 }}
      >
        <h3 className="text-black text-center pb-60 pt-60">Бренды</h3>
        <button
            className="btn--primary style1"
          onClick={() => setCreateVisible(true)}
        >
          Добавить бренд
        </button>
        <button
            className="btn--primary style1"
          onClick={() => setDeleteVisible(true)}
        >
          Удалить бренд
        </button>
        <button
            className="btn--primary style1"
          onClick={() => setUpdateVisible(true)}
        >
          Редактировать бренд
        </button>
        <DeleteBrand
          show={deleteVisible}
          onHide={() => setDeleteVisible(false)}
        />
        <CreateBrand
          show={createVisible}
          onHide={() => setCreateVisible(false)}
        />
        <UpdateBrand
          show={updateVisible}
          onHide={() => setUpdateVisible(false)}
        />
      </Card>
    </>
  );
};

export default AdminBrand;
