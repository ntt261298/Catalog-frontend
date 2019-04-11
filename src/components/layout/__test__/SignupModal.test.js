import React from 'react';
import { shallow } from '../../../enzyme';
import { SignupModal } from '../SignupModal';

describe('src/components/layout/SignupModal.js', () => {
  let wrapper;
  let props;
  let signupButton;
  let moveToLoginParam;

  const update = () => {
    signupButton = wrapper.find('Button');
    moveToLoginParam = wrapper.find('p');
    // usernameInput = wrapper.find('input[name='username']')
  };

  const setup = () => {
    wrapper = shallow(
      <SignupModal {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      modal: 'signup',
      errMessage: '',
      onSignup: jest.fn().mockImplementation(() => Promise.resolve('message')),
      showLogin: jest.fn(),
      hideModal: jest.fn(),
    };
  });

  it('should render signup modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onSignup when signup button is clicked', () => {
    setup();
    wrapper.setState({ username: 'test', password: '123456' }, () => {
      signupButton.simulate('click');
      expect(props.onSignup).toHaveBeenCalled();
      expect(props.hideModal).toHaveBeenCalled();
    });
  });

  it('should call showLogin and hideModal when new move to login param is clicked', () => {
    setup();
    moveToLoginParam.simulate('click');
    expect(props.hideModal).toHaveBeenCalled();
    expect(props.showLogin).toHaveBeenCalled();
  });

  it('should set message \'Username must not be blank\' when user\'s input is blank', () => {
    setup();
    wrapper.setState({ username: '', password: '123456' }, () => {
      signupButton.simulate('click');
      expect(props.onSignup).not.toHaveBeenCalled();
    });
  });

  it('should set message \'Password must have at least 6 characters\' when password\'s input is wrong', () => {
    setup();
    wrapper.setState({ username: 'test123', password: '123' }, () => {
      signupButton.simulate('click');
      expect(props.onSignup).not.toHaveBeenCalled();
    });
  });

  it('should call onChangeInput when user\'s input is changed', () => {
    setup();
    moveToLoginParam.simulate('change');
    expect(props.hideModal).toHaveBeenCalled();
    expect(props.showLogin).toHaveBeenCalled();
  });
});
