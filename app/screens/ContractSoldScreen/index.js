import { connect } from 'react-redux';
import ContractSoldScreen from './ContractSoldScreen';

import { fetchSoldContract } from './ContractSoldActon';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.contractSoldReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSoldContract: () => dispatch(fetchSoldContract())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractSoldScreen);
