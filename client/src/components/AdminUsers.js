import React, { useEffect, useState } from "react";

import { Card, Button, Col, Form, Row } from "react-bootstrap";

import { changeRole, getByCriteria, getUser } from "../http/userApi";

const AdminUsers = () => {
  const [admins, setAdmins] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  useEffect(() => {
    getByCriteria("ADMIN").then((data) => setAdmins(data.rows));
  }, []);

  const findUser = () => {
    getUser(email).then((data) => setUser(data));
    setEmail("");
  };

  const deleteAdmin = async (email) => {
    await changeRole(email, "USER");
    setAdmins((prev) => prev.filter((el) => el.email !== email));
  };
  const addAdmin = async (user) => {
    await changeRole(user.email, "ADMIN");
    setAdmins((prev) => [...prev, user]);
    setUser(null);
  };

  return (
      <>

        <Card
          style={{
            width: "80%",
            margin: "auto",
            padding: 15,
            marginTop: 15,
            display: "flex",
          }}
        >
            <h3 className="text-black text-center pb-60 pt-60">Список администраторов</h3><Row>
          <Col
            style={{
              borderRight: "1px solid gray",
              marginRight: 10,
            }}
          >
            <h5>Администраторы</h5>
            {admins.map((el) => (
              <Card
                key={el.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <p style={{ margin: "auto" }}>{el.email}</p>{" "}
                <button className="btn--primary style2" onClick={() => deleteAdmin(el.email)}>D</button>
              </Card>
            ))}
          </Col>
          <Col>
            <h5>Добавление Администраторов</h5>
            <Form
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Form.Control
    placeholder="enter email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
              <a className="btn--primary style2" onClick={findUser}><i className="flaticon-search"/></a>
            </Form>
            {user ? (
              <Card
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <p style={{ margin: "auto" }}>{user.email}</p>
                <a className="btn--primary style2" onClick={() => addAdmin(user)}>+</a>
              </Card>
            ) : (
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  color: "gray",
                }}
              >
                  Нет пользователей с такой электронной почтой
              </h5>
            )}
          </Col>
            </Row>
        </Card>
      </>
  );
};

export default AdminUsers;
