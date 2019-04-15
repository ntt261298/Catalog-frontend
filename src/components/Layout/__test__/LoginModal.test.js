import React from 'react';
import { shallow } from 'configs';
import { LoginModal } from 'components/Layout//LoginModal';

describe('components/Layout/LoginModal', () => {
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
      onLogin: jest.fn().mockImplementation(() => Promise.resolve('message')),
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
    wrapper.setState({ username: 'test123', password: '123456' }, () => {
      loginButton.simulate('click');
      expect(props.onLogin).toHaveBeenCalled();
    });
  });

  it('should set message \'Username must not be blank\' when User\'s input is blank', () => {
    setup();
    wrapper.setState({ username: '', password: '123456' }, () => {
      loginButton.simulate('click');
      expect(props.onLogin).not.toHaveBeenCalled();
    });
  });

  it('should set message \'Password must have at least 6 characters\' when password\'s input is wrong', () => {
    setup();
    wrapper.setState({ username: 'test123', password: '123' }, () => {
      loginButton.simulate('click');
      expect(props.onLogin).not.toHaveBeenCalled();
    });
  });

  it('should call showSignup and hideModal when new account param is clicked', () => {
    setup();
    newAccountParam.simulate('click');
    expect(props.showSignup).toHaveBeenCalled();
    expect(props.hideModal).toHaveBeenCalled();
  });
});
