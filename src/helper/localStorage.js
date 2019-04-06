export const loadState = () => {
  try {
    const seriallizedState = localStorage.getItem('state');
    if (seriallizedState === null) {
      return '';
    }
    return JSON.parse(seriallizedState);
  } catch (err) {
    return '';
  }
};

export const saveState = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.setItem('state', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};

export const removeState = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.removeItem('state', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};
