import React from 'react';
import { shallow } from 'configs';
import { ItemCard } from 'components/Commons/ItemCard';

describe('components/Commons/ItemCard', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <ItemCard {...props} />,
    );
  };
  beforeEach(() => {
    props = {
      item: {
        id: 1,
        title: 'title',
        category_id: 2,
      },
    };
  });

  it('should render ItemCard', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
