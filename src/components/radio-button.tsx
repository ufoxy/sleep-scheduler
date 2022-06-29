import React from "react";
import { MDBRadio, MDBBtnGroup } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function RadioButton() {
  return (
    <MDBBtnGroup shadow="0">
      <MDBRadio
        btn
        btnColor="info"
        id="btn-radio"
        name="options"
        wrapperTag="span"
        label="Adormercer"
        defaultChecked
      />
      <MDBRadio
        btn
        btnColor="info"
        id="btn-radio2"
        name="options"
        wrapperClass="mx-2"
        wrapperTag="span"
        label="Acordar"
      />
    </MDBBtnGroup>
  );
}
