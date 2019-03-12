import { connect } from 'react-redux';
import CommoditySelectionScreen from './CommoditySelectionScreen'
import { fetchProduct } from './CommoditySelectionAction';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.buyingOffer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: () => dispatch(fetchProduct())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommoditySelectionScreen);