const ContractData = {
  status: 200,
  message: 'trade list.',
  payload: {
    data: [
      {
        _id: '5c2f09387d3116507e9b01b6',
        tradeId: {
          _id: '5c274e1f7d3116507e9aff92',
          createdAt: '2018-12-29T10:36:15.951Z',
          tradeBase: 'buy',
          quantity: 700,
          quantityUnit: 'Metric Tonne',
          price: 230,
          priceUnit: 'MT',
          incoterm: 'CIF',
          port: 'Navasheva',
          mainSpecification: 'Pressed bales',
          shipmentOrDelivery: 'shipment',
          shipmentOrDeliveryPeriod: 'March,2019',
          origin: {
            name: 'Egypt',
            countryId: '59c38dfc6039ce5e0803ab5b'
          },
          product: {
            name: 'Cotton',
            productId: '5b07b6152888f04396c5885d'
          }
        },
        userId: '5ba241e95ea068476d8c3198',
        isEnable: true
      }
    ]
  },
  pager: {
    sortBy: 'createdAt',
    sortOrder: 'desc',
    pageNumber: 1,
    recordsPerPage: 5,
    filteredRecords: 5,
    totalRecords: 16
  }
};
export default ContractData;
