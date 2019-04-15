import React from 'react';
import { shallow } from 'configs';
import { CategoryPage } from 'components/Category/CategoryPage';

describe('components/Category/CategoryPage', () => {
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

  it('should render Category page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
