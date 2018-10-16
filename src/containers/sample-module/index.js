import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import View from "./View";
import * as actions from "../../redux/actions/sample-module";

function mapStateToProps(state) {
  return {
    isLoading: state.ui.isLoading,
    sampleModuleList: state.sampleModule.sampleModuleList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduxAction: bindActionCreators({ ...actions }, dispatch),
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
