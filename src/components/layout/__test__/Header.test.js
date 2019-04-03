import React from 'react';
import { shallow } from '../../../enzyme';
import Header from '../Header';

describe('Header tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Header {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      accessToken: 'randowAccessToken',
    };
  });

  it('renders header', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
