import React, { useEffect, useState } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Drink from "./views/Drink";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Input } from "antd";
import InputComponent from "./components/Input";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("show modal is", showModal);
  }, [showModal]);

  const handleClose = (e) => {
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
        title="Search"
        centered
        visible={showModal}
        onOk={handleClose}
        onCancel={handleClose}
        width={1000}
        bodyStyle={{ height: 500 }}
        footer={null}
      >
        <InputComponent />
      </Modal>
    </div>
  );
}

export default App;
