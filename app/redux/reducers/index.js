import { combineReducers } from 'redux';
import userReducer from './userReducer';
import BuyingOfferReducer from '../../screens/BuyingOfferScreen/BuyingOfferReducer';
import SellingOfferReducer from '../../screens/SellingOfferScreen/SellingOfferReducer';
import MyOfferReducer from '../../screens/MyOfferScreen/MyOfferReducer';
import TraddleOfferReducer from '../../screens/TraddleOfferScreen/TraddleOfferReducer';
import CommodityReducer from '../../screens/RegistrationScreen/CommoditySelection/CommoditySelectionReducer';
import ContractReducer from '../../screens/ContractBoughtScreen/ContractBoughtReducer';
import ContractSoldReducer from '../../screens/ContractSoldScreen/ContractSoldReducer';
import CurrentTradeBought from '../../screens/CurrentTradeBoughtScreen/CurrentTradeBoughtRedcuer';
import CurrentTradeSold from '../../screens/CurrentTradeSoldScreen/CurrentTradeSoldReducer';

// Root Reducer
const rootReducer = combineReducers({
  user: userReducer,
  buyingOffer: BuyingOfferReducer,
  sellingOffer: SellingOfferReducer,
  myOffer: MyOfferReducer,
  traddleOffer: TraddleOfferReducer,
  commodityReducer: CommodityReducer,
  ContractReducer,
  contractSoldReducer: ContractSoldReducer,
  currentTradeBought: CurrentTradeBought,
  currentTradeSold: CurrentTradeSold
});

export default rootReducer;
