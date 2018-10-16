import PropTypes from "prop-types";

export const contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

export const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  sampleModuleList: PropTypes.array,
  isLoading: PropTypes.bool
};

export const defaultProps = {
  sampleModuleList: [],
  isLoading: []
};
