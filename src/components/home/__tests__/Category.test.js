import React from 'react';
import { shallow } from '../../../enzyme';
import { Category } from '../Category';

describe('Category tests', () => {
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
      categories: [{ id: 1, items: [], name: 'One' },
        { id: 1, items: [], name: 'Two' },
        { id: 1, items: [], name: 'Three' }],
      getCategories: () => props.categories,
    };
  });

  it('renders list-categories', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
