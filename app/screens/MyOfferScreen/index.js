import { connect } from 'react-redux';
import MyOfferScreen from './MyOfferScreen';

import { fetchMyOffer } from './MyOfferAction';

/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.myOffer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMyOffer: () => dispatch(fetchMyOffer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOfferScreen);
