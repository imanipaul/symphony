import React, { useEffect, useState } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Drink from "./views/Drink";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("show modal is", showModal);
  }, [showModal]);

  const handleOk = (e) => {
    console.log(e);
    setShowModal(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setShowModal(false);
  };

  return (
    <div className="App">
      <header>
        <h1>symphony</h1>
        <SearchOutlined onClick={() => setShowModal(!showModal)} />
      </header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/drink/:id">
          <Drink />
        </Route>
      </Switch>
      <Modal
        title="Basic Modal"
        centered
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        bodyStyle={{ height: 500 }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default App;
