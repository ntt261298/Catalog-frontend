import React from 'react';
import { shallow } from '../../../enzyme';
import Item from '../Item';

describe('Item tests', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Item {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      ...props,
      items: [{ id: 1, title: 'Title 1', desciption: 'One' },
        { id: 2, title: 'Title 2', desciption: 'Two' },
        { id: 3, title: 'Title 3', desciption: 'Three' }],
      getItems: () => props.items,
    };
  });

  it('renders list-items', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
