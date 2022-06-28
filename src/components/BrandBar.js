import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  const getAllDevices = () => {
    device.setSelectedBrand("all");
  };
  return (
    <Row className="d-flex">
      <Card
        style={{ cursor: "pointer", width: "auto" }}
        className="p-3"
        onClick={getAllDevices}
        border={"all" === device.selectedBrand ? "dark" : "light"}
      >
        Все бренды
      </Card>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer", width: "auto" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "dark" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
