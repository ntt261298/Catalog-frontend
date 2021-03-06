import React from 'react';
import { shallow } from 'enzymeConfig';
import { ItemPage } from 'components/Item/ItemPage';

describe('components/Item/ItemPage', () => {
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

  it('should render Item page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
