import React from 'react';
import { shallow } from '../../../enzyme';
import { LoginModal } from '../LoginModal';

describe('src/components/layout/LoginModal.js', () => {
  let wrapper;
  let props;
  let loginButton;
  let newAccountParam;

  const update = () => {
    loginButton = wrapper.find('Button');
    newAccountParam = wrapper.find('p');
  };

  const setup = () => {
    wrapper = shallow(
      <LoginModal {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      modal: 'login',
      errMessage: '',
      onLogin: jest.fn(),
      hideModal: jest.fn(),
      showSignup: jest.fn(),
      toggle: jest.fn(),
    };
  });

  it('should render login modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onLogin when login button is clicked', () => {
    setup();
    wrapper.setState({ username: 'test', password: '123456' }, () => {
      loginButton.simulate('click');
      expect(props.onLogin).toHaveBeenCalled();
    });
  });

  it('should call showSignup and hideModal when new account param is clicked', () => {
    setup();
    newAccountParam.simulate('click');
    expect(props.showSignup).toHaveBeenCalled();
    expect(props.hideModal).toHaveBeenCalled();
  });
});
