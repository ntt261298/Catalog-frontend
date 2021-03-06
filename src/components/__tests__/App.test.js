import React from 'react';
import { shallow } from 'enzymeConfig';
import { App } from 'components/App';

describe('components/App', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <App {...props} />,
    );
  };
  beforeEach(() => {
    props = {
      loggedIn: true,
    };
  });

  it('should render App', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should render App with Redirect', () => {
    props.loggedIn = false;
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
