import { connect } from 'react-redux';
import BuyerOfferDetailScreen from './BuyerOfferDetailScreen';
import { fetchBuyingOfferDetail } from './BuyerOfferDetailAction';

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
    fetchBuyingOfferDetail: () => dispatch(fetchBuyingOfferDetail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerOfferDetailScreen);
