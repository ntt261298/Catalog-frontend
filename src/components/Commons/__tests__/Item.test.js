import React from 'react';
import { shallow } from '../../../enzyme';
import { Item } from '../Item';

describe('src/components/Commons/Item', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Item {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      allItems: [
        {
          category_id: 2,
          created_at: '2019-03-24T03:33:27+00:00',
          description: 'This is title 3',
          id: 6,
          title: 'Title 3',
          user_id: 1,
        },
        {
          category_id: 1,
          created_at: '2019-03-24T03:33:27+00:00',
          description: 'This is title 1',
          id: 1,
          title: 'Title 2',
          user_id: 1,
        },
      ],
      categoryItems: [
        {
          id: 1,
          items: [],
          name: 'Category 1',
        },
        {
          id: 2,
          items: [],
          name: 'Category 2',
        },
      ],
      type: 'home',
      id: 1,
      getItems: jest.fn().mockImplementation(() => Promise.resolve('message')),
      getCategoryItems: jest.fn().mockImplementation(() => Promise.resolve('message')),
    };
  });

  it('should render list-items', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getItems in componentDidMount', () => {
    setup();
    expect(props.getItems).toHaveBeenCalled();
  });

  it('should call getCategoryItems in componentDidMount', () => {
    props.type = 'category';
    setup();

    expect(props.getCategoryItems).toHaveBeenCalled();
  });
  it('should call getCategoryItems in componentDidUpdate', () => {
    props.type = 'category';
    setup();
    wrapper.setProps({ id: 4 });

    expect(props.getCategoryItems).toHaveBeenCalled();
  });
});
