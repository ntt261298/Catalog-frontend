import React from 'react';
import { shallow } from '../../../enzyme';
import { LoginButton } from '../LoginButton';

describe('src/components/layout/LoginButton.js', () => {
  let wrapper;
  let props;
  let loginButton;
  const update = () => {
    loginButton = wrapper.find('button');
  };

  const setup = () => {
    wrapper = shallow(
      <LoginButton {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      showLogin: jest.fn(),
    };
  });

  it('should render login button', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call showLogin when login button is clicked', () => {
    setup();
    loginButton.simulate('click');
    expect(props.showLogin).toHaveBeenCalled();
  });
});
