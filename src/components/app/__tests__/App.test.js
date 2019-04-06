import React from 'react';
import { shallow } from '../../../enzyme';
import { App } from '../App';

describe('src/components/app/App', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <App {...props} />,
    );
  };
  beforeEach(() => {
    props = {
      token: 'randomToken',
    };
  });

  it('should render app', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
