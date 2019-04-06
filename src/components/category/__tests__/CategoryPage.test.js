import React from 'react';
import { shallow } from '../../../enzyme';
import { CategoryPage } from '../CategoryPage';

describe('src/components/layout/CategoryPage.js', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <CategoryPage {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      match: {
        params: {
          id: 1,
        },
      },
    };
  });

  it('should render category page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
