import React from 'react';
import { shallow } from '../../../enzyme';
import LoginButton from '../LoginButton';

describe('Login button tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <LoginButton {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      toggleLogin() {},
    };
  });

  it('renders login button', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
