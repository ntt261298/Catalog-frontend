import React from 'react';
import { shallow } from '../../../enzyme';
import { Page404 } from '../404';

describe('src/components/app/404', () => {
  let wrapper;

  const setup = () => {
    wrapper = shallow(
      <Page404 />,
    );
  };

  it('should render 404 page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
