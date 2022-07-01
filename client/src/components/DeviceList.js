import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
      <>
          {device.devices.map((item) => (
              <DeviceItem key={item.id} item={item}/>
          ))}
      </>
  );
});

export default DeviceList;
