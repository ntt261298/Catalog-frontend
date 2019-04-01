import React from 'react';
import { shallow } from '../../enzyme';

import Category from '../home/Category';

describe('Category tests', () => {
  it('renders list-categories', () => {
    const categories = [
      { id: 1, items: [], name: 'One' },
      { id: 1, items: [], name: 'Two' },
      { id: 1, items: [], name: 'Three' },
    ];
    const wrapper = shallow(<Category categories={categories} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.category')).toBeDefined();
    expect(wrapper.find('li')).toHaveLength(categories.length);
  });

  it('renders a list item', () => {
    const categories = [
      { id: 1, items: [], name: 'Thor' },
      { id: 1, items: [], name: 'Loki' },
    ];
    const wrapper = shallow(<Category categories={categories} />);

    // Check if an element in the Component exists
    expect(wrapper.contains(<li key="1">Thor</li>)).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const categories = [
      { id: 1, items: [], name: 'John' },
      { id: 1, items: [], name: 'Doe' },
      { id: 1, items: [], name: 'Doe' },
    ];
    const wrapper = shallow(<Category categories={categories} />);

    // Expect the child of the first item to be an array
    expect(wrapper.find('li').get(0).props.children).toEqual('John');
  });
});
