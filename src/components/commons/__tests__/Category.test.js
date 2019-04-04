import React from 'react';
import { shallow } from '../../../enzyme';
import Category from '../Category';

describe('Item tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Category {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      category: [{ id: 1, name: 'Title 1', items: [] },
        { id: 2, name: 'Title 2', items: [] },
        { id: 3, name: 'Title 3', items: [] }],
      getCategories: () => props.items,
    };
  });

  it('should render list-categories', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
