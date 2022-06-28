import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../index";
import { ListGroupItem } from "react-bootstrap";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  const getAllDevices = () => {
    device.setSelectedType("all");
    device.setSelectedBrand("all");
  };
  return (
    <ListGroup style={{ cursor: "pointer" }}>
      <ListGroupItem
        active={"all" === device.selectedType}
        onClick={getAllDevices}
      >
        Все товары
      </ListGroupItem>
      {device.types.map((type) => (
        <ListGroup.Item
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
