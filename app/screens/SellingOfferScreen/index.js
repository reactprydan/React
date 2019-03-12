import { connect } from 'react-redux';
import SellingOfferScreen from './SellingOfferScreen';
import { fetchSellingOffer } from './SellingOfferAction';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.sellingOffer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSellingOffer: () => dispatch(fetchSellingOffer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellingOfferScreen);
