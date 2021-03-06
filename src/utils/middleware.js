export default () => next => (action) => {
  if (!action.promise) {
    return next(action);
  }

  const startAction = () => ({
    type: `${action.type}`,
  });

  const successAction = payload => ({
    type: `${action.type}_SUCCESS`,
    payload,
  });

  const failureAction = payload => ({
    type: `${action.type}_FAIL`,
    payload,
  });

  next(startAction());

  return action.promise
    .then((result) => {
      next(successAction(result));
      return result.message;
    })
    .catch((error) => {
      next(failureAction(error));
      throw error;
    });
};
