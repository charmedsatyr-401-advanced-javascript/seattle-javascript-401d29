let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'POST':
      return [...state, payload];

    case 'DELETE':
      return state.filter((record, idx) => idx !== payload);

    default:
      return state;
  }
};
