import React from 'react';
import { shallow } from '../../../enzyme';
import { LoginModal } from '../LoginModal';

describe('src/components/layout/LoginModal.js', () => {
  let wrapper;
  let props;
  let loginButton;
  let modalHeader;
  let newAccountParam;
  let userInput;

  const update = () => {
    loginButton = wrapper.find('Button');
    modalHeader = wrapper.find('ModalHeader');
    newAccountParam = wrapper.find('p');
    userInput = wrapper.find('input[name="username"]');
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
      onLogin: jest.fn(),
      moveToSignup: jest.fn(),
      onChangeInput: jest.fn(),
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
    loginButton.simulate('click');
    expect(props.onLogin).toHaveBeenCalled();
  });

  it('should call hideModal when close button is clicked', () => {
    setup();
    modalHeader.simulate('click');
    expect(props.hideModal).toHaveBeenCalled();
  });

  it('should call showSignup when new account param is clicked', () => {
    setup();
    newAccountParam.simulate('click');
    expect(newAccountParam).toHaveLength(1);
    expect(props.moveToSignup).toHaveBeenCalled();
  });

  it('should call onChangeInput when user\'s input is changed', () => {
    setup();
    userInput.simulate('change', {
      target: {
        name: '123456',
      },
    });
    expect(props.onChangeInput).toHaveBeenCalled();
  });
});
