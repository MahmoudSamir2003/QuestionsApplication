import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FromInput from "./components/FromInput";
import QAlist from "./components/QAlist";
import { question } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(question);
  const addItem = () => {
    localStorage.setItem("item", JSON.stringify([...question]));
    setData([...question]);
    notify("Added successfully" , "Success")
  };
  const deleteAllItems = () => {
    localStorage.removeItem("item")
    question.splice(0, question.length);
    setData([])
    notify("All have been deleted successfully" , "Error")

  }
  const deletOneItem = (items) => {
    localStorage.setItem("item", JSON.stringify([...items]));
    setData([...items]);
    notify("The question has been successfully deleted" , "Success")
  };
  const notify = (massage,type) =>{
    if(type==="Error")
    toast.error(massage)
    else if(type==="Success")
    toast.success(massage)
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-5 text-center">
              Common question and answer application
            </div>
          </Col>
          <Col sm="8">
            <FromInput onAdd={addItem} notify={notify} />
            <QAlist data={data} deletOneItem={deletOneItem} />
           {
            localStorage.getItem("item") != null?(<Button onClick={deleteAllItems}>clear all</Button>):null
           }
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    </div>
  );
}

export default App;
