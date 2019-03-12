import { connect } from 'react-redux';
import MyAccountDebitScreen from './MyAccountDebitScreen';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

import { fetchMyDebitDetail } from './MyAccountDebitAction';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.debitdetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMyDebitDetail: () => dispatch(fetchMyDebitDetail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccountDebitScreen);
