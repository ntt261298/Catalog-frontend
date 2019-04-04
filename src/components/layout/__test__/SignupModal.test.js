import React from 'react';
import { shallow } from '../../../enzyme';
import SignupModal from '../SignupModal';

describe('src/components/layout/SignupModal.js', () => {
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
      sh() {},
      onSignup: () => { props.signupModal = true; },
    };
  });

  it('renders signup modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
