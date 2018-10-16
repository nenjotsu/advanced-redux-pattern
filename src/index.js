import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import List from "antd/lib/list";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import store from "./redux/store";

import "antd/dist/antd.css";
import "./styles.css";

const data = ["Scalable", "Reusable", "Maintainable", "Multiple dispatch"];

function App() {
  return (
    <div className="App">
      <h1>Advanced Redux Pattern</h1>
      <p>
        Using redux, redux-observables, rxjs, react-actions, middleware,
        ant-design
      </p>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Icon className="icon" type="check-circle" theme="outlined" />
            {item}
          </List.Item>
        )}
      />
      <div className="button-list">
        <Button className="btn">Get</Button>
        <Button className="btn">Post</Button>
        <Button className="btn">Delete</Button>
        <Button className="btn">Cancel</Button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
