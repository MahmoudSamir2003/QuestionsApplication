import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";
import { question } from "../data";

const QAlist = ({ data, deletOneItem }) => {
  const dataLocal=JSON.parse(localStorage.getItem("item"))
  const onDleteItem = (ID) => {
    if (localStorage.getItem("item")!=null ) {
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1);
      deletOneItem(question);
    }
  };

  return (
    <Row className="my-3">
      <Accordion defaultActiveKey="0">
        {localStorage.getItem("item")!=null  ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                 
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="px-3 d-inline text-end">{item.a}</div>
                  <Button
                    onClick={() => onDleteItem(item.id)}
                    className="btn-color"
                  >
                    clear the question
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center">There is no answer </h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAlist;
