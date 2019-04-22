export const post = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};

export const destroy = payload => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};