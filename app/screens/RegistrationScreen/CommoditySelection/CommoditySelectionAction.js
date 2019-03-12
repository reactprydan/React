import CommodityData from '../../../CommodityData';

export const FETCHING_BUYINGOFFER_REQUEST = 'FETCHING_BUYINGOFFER_REQUEST';
export const FETCHING_BUYINGOFFER_SUCCESS = 'FETCHING_BUYINGOFFER_SUCCESS';
export const FETCHING_BUYINGOFFER_FAILURE = 'FETCHING_BUYINGOFFER_FAILURE';

export const fetchingProductRequest = () => ({
  type: FETCHING_BUYINGOFFER_REQUEST
});

export const fetchingProductSuccess = data => ({
  type: FETCHING_BUYINGOFFER_SUCCESS,
  data
});

export const fetchingProductFailure = error => ({
  type: FETCHING_BUYINGOFFER_FAILURE,
  error
});



export function fetchProduct() {
  return dispatch => {
    dispatch(fetchingProductRequest());
    setTimeout(() => {
      dispatch(fetchingProductSuccess(CommodityData.payload.data));
    }, 2000);
  };
}

// export function selectProduct(item) {
//   return dispatch => {
//     productData = CommodityData.payload.data;
//     for (i = 0; i < productData.length; i++) {
  
//       if (productData[i].name === item) {
//           productData[i].isSelected=!productData[i].isSelected
//         for (j = 0; j < productData[i].productListItem.payload.data.length; j++) {
         
//           productData[i].productListItem.payload.data[j].isSelected = ! productData[i].productListItem.payload.data[j].isSelected;
//         }
//       }
//     }
//     dispatch(fetchingProductSuccess(productData));
//   };
// }

export function selectProduct(item) {
  return dispatch => {
    productData = CommodityData.payload.data;
      productData.map((productItem,index) =>{
          if (productItem.name === item) {
            productItem.isSelected =! productItem.isSelected;
            productItem.productListItem.payload.data.map((productListItem,index) =>{
              productListItem.isSelected = !productItem.isSelected;
            })
            
        }
      })
    dispatch(fetchingProductSuccess(productData));
  };
}

export function selectSubProduct(productId,subProductId) {
  return dispatch => {
    productData = CommodityData.payload.data;
      productData && productData.map((productItem,index) =>{
        if (productItem._id == productId) {
          alert(subProductId)
          productItem.productListItem && productItem.productListItem.payload.data.map((productListItem,index) =>{
            if (productListItem._id == subProductId) {
              productListItem.isSelected = !productListItem.isSelected;  
            }
          })
        }
      })
    dispatch(fetchingProductSuccess(productData));
  };
}
