let initialState = {
  title: 'React Counter App',
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
};
