import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import List from "antd/lib/list";
import Icon from "antd/lib/icon";
import store from "./redux/store";
import SampleModule from "./containers/sample-module";

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
        <SampleModule />
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
