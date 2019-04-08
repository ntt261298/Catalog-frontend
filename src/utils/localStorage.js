export const loadToken = () => {
  try {
    const seriallizedState = localStorage.getItem('token');
    if (seriallizedState === null) {
      return undefined;
    }
    return JSON.parse(seriallizedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToken = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.setItem('token', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};

export const removeToken = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.removeItem('token', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};
