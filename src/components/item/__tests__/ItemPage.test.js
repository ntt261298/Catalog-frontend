import React from 'react';
import { shallow } from '../../../enzyme';
import { ItemPage } from '../ItemPage';

describe('src/components/layout/CategoryPage.js', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <ItemPage {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      match: {
        params: {
          categoryID: 1,
          userID: 2,
        },
      },
    };
  });

  it('should render item page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
