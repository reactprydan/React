import { connect } from 'react-redux';
import MyAccountCreditScreen from './MyAccountCreditScreen';
/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

import { fetchMyCreditDetail } from './MyAccountCreditAction';

const mapStateToProps = state => {
  return {
    data: state.credidetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMyCreditDetail: () => dispatch(fetchMyCreditDetail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccountCreditScreen);
