import { connect } from 'react-redux';
import CurrentTradeBoughtScreen from './CurrentTradeBoughtScreen';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

import { fetchingCurrentTadeBroght } from './CurrentTradeBoughtAction';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.currentTradeBought
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingCurrentTadeBroght: () => dispatch(fetchingCurrentTadeBroght())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTradeBoughtScreen);
