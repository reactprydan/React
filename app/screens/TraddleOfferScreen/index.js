import { connect } from 'react-redux';
import TraddleOfferScreen from './TraddleOfferScreen';
import { fetchTraddleOffer } from './TraddleOfferAction';
/**
 * This file is similar to container for any component
 * Todo: Redux mapStateToProps function goes Here
 * Todo: Redux mapDispatchToProps function Goes Here
 */

const mapStateToProps = state => {
  return {
    data: state.traddleOffer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTraddleOffer: () => dispatch(fetchTraddleOffer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraddleOfferScreen);
