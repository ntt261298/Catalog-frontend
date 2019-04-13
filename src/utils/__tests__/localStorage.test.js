import { loadToken, saveToken, removeToken } from 'utils/localStorage';

describe('utils/localStorage', () => {
  it('should call all utils', () => {
    loadToken();
    saveToken();
    removeToken();
  });
});
