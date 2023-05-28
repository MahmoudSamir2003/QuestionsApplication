import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import { question } from "../data";
const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("Please enter the data", "Error");
      return;
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
    console.log(question);
  };
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="text"
          placeholder="Enter the question"
        />
      </Col>

      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder=" Enter the answer"
        />
      </Col>
      <Col sm="2">
        <Button onClick={addNewItem} className="btn-color w-100" type="submit">
          addition
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
