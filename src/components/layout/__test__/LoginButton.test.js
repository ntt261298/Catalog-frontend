import React from 'react';
import { shallow } from '../../../enzyme';
import { LoginButton } from '../LoginButton';

describe('Login button tests', () => {
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
      toggleLogin: jest.fn(),
    };
  });

  it('should render login button', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleLogin when login button is clicked', () => {
    setup();
    console.log(wrapper.debug());
    loginButton.simulate('click');
    expect(props.toggleLogin).toHaveBeenCalled();
  });
});
