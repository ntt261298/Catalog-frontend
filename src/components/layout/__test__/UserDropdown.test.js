import React from 'react';
import { shallow } from '../../../enzyme';
import { UserDropdown } from '../UserDropdown';

describe('src/coponents/layout/UserDropdown.js', () => {
  let wrapper;
  let props;
  let logoutLink;

  const update = () => {
    logoutLink = wrapper.find('.logout');
  };
  const setup = () => {
    wrapper = shallow(
      <UserDropdown {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      signupModal: false,
      onLogout: jest.fn(),
    };
  });

  it('should render user dropdown', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onLogout when logoutLink is clicked', () => {
    setup();
    logoutLink.simulate('click');
    // Expect the wrapper object to be defined
    expect(props.onLogout).toMatchSnapshot();
  });
});
