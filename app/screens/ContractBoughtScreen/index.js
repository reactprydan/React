import { connect } from 'react-redux';
import ContractBoughtScreen from './ContractBoughtScreen';
import { fetchContractData } from './ContractBoughtAction';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.ContractReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContractData: () => dispatch(fetchContractData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractBoughtScreen);
