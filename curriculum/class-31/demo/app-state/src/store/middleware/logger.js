export default store => next => action => {
  try{
    let result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  }
  catch( err ) {
    err.action = action;
    console.error('Error on Action', action);
    return err;
  }
};
