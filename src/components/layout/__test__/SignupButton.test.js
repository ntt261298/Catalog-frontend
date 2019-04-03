import React from 'react';
import { shallow } from '../../../enzyme';
import SignupButton from '../SignupButton';

describe('Signup button tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <SignupButton {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      toggleSignup() {},
    };
  });

  it('renders signup button', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
