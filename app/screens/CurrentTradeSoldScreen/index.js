import { connect } from 'react-redux';

import CurrentTradeSoldScreen from './CurrentTradeSoldScreen';
import { fetchingCurrentTadeSold } from './CurrentTradeSoldAction';

const mapStateToProps = state => {
  return {
    data: state.currentTradeSold
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingCurrentTadeSold: () => dispatch(fetchingCurrentTadeSold())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTradeSoldScreen);
