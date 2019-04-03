import React from 'react';
import { shallow } from '../../../enzyme';
import LoginModal from '../LoginModal';

describe('Login modal tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <LoginModal {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      loginModal: false,
      toggleLogin() {},
      toggleSignup() {},
      onLogin: () => { props.loginModal = true; },
    };
  });

  it('renders login button', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
