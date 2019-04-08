export const loadToken = () => {
  try {
    const seriallizedState = localStorage.getItem('token');
    if (seriallizedState === null) {
      return '';
    }
    return JSON.parse(seriallizedState);
  } catch (err) {
    return '';
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

export const removeToken = () => {
  try {
    localStorage.setItem('token', '');
  } catch (err) {
    console.error(err);
  }
};
