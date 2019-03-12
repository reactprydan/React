import { connect } from 'react-redux';
import BuyingOfferScreen from './BuyingOfferScreen';
import { fetchBuyingOffer } from './BuyingOfferAction';

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
    fetchBuyingOffer: () => dispatch(fetchBuyingOffer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyingOfferScreen);
