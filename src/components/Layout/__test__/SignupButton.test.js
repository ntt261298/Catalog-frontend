import React from 'react';
import { shallow } from '../../../enzyme';
import { SignupButton } from '../SignupButton';

describe('src/Layout/SignupButton.js', () => {
  let wrapper;
  let props;
  let signupButton;
  const update = () => {
    signupButton = wrapper.find('button');
  };

  const setup = () => {
    wrapper = shallow(
      <SignupButton {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      showSignup: jest.fn(),
    };
  });

  it('should render signup button', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call showSignup when signup button is clicked', () => {
    setup();
    signupButton.simulate('click');
    expect(props.showSignup).toHaveBeenCalled();
  });
});
