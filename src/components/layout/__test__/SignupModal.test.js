import React from 'react';
import { shallow } from '../../../enzyme';
import SignupModal from '../SignupModal';

describe('Signup modal tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <SignupModal {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      signupModal: false,
      toggleLogin() {},
      toggleSignup() {},
      onSignup: () => { props.signupModal = true; },
    };
  });

  it('renders signup modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
