import React, { Component } from "react";
import Button from "antd/lib/button";
import List from "antd/lib/list";
import Spin from "antd/lib/spin";
import { defaultProps, propTypes, contextTypes } from "./helpers";

class SampleModule extends Component {
  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.props.reduxAction.getSampleModuleCancel();
  }

  init = () => {
    console.log("Component Mounted");
  };

  getSampleModuleData = () => {
    this.props.reduxAction.getSampleModuleEpic();
  };

  getSampleModuleDataCancel = () => {
    this.props.reduxAction.getSampleModuleCancel();
  };

  render() {
    const { sampleModuleList, isLoading } = this.props;
    console.log(sampleModuleList, isLoading);
    return (
      <main className="sample-module-section">
        <h4>Sample Module</h4>

        <Button className="btn" onClick={this.getSampleModuleData}>
          Get
        </Button>
        <Button className="btn" onClick={this.getSampleModuleDataCancel}>
          Cancel Now
        </Button>
        {isLoading ? (
          <div className="spin-container">
            <Spin />
          </div>
        ) : (
          <List
            className="data-list"
            size="small"
            bordered
            dataSource={sampleModuleList}
            renderItem={item => <List.Item>{item.title}</List.Item>}
          />
        )}
      </main>
    );
  }
}

SampleModule.propTypes = propTypes;
SampleModule.defaultProps = defaultProps;
SampleModule.contextTypes = contextTypes;

export default SampleModule;
