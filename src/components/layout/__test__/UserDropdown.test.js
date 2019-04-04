import React from 'react';
import { shallow } from '../../../enzyme';
import SignupModal from '../SignupModal';

describe('src/coponents/layout/UserDropdown.js', () => {
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
      onLogout() {},
    };
  });

  it('renders signup modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
