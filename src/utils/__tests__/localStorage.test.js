import { loadToken, saveToken, removeToken } from '../localStorage';

describe('src/utils/localStorage', () => {
  it('should call all utils', () => {
    loadToken();
    saveToken();
    removeToken();
  });
});
