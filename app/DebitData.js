const DebitData = {
  status: 200,
  message: 'Product list.',
  payload: {
    data: [
      { item: 'New description', amount: 1000, pending: false },
      { item: 'Latest Description', amount: 1500, pending: true },
      { item: 'Content Description', amount: 1500, pending: false }
    ]
  }
};

export default DebitData;
