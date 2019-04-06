import React from 'react';
import { shallow } from '../../../enzyme';
import { PrivateRoute } from '../PrivateRoute';

describe('src/components/home/HomePage.js', () => {
  it('should render private route', () => {
    const props = {
      components: '',
      token: 'randomToken',
    };
    const wrapper = shallow(<PrivateRoute {...props} />);
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
  it('should not render private route', () => {
    const props = {
      components: '',
      token: '',
    };
    const wrapper = shallow(<PrivateRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
