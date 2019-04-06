import React from 'react';
import { shallow } from '../../../enzyme';
import Item from '../Item';

describe('src/components/commons/Item', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Item {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      item: {
        byId: {
          1: {
            category_id: 2,
            created_at: '2019-03-24T03:33:27+00:00',
            description: 'This is title 3',
            id: 6,
            title: 'Title 3',
            user_id: 1,
          },
          2: {
            category_id: 1,
            created_at: '2019-03-24T03:33:27+00:00',
            description: 'This is title 1',
            id: 1,
            title: 'Title 2',
            user_id: 1,
          },
        },
        allIds: [1, 2],
        categoryIds: [1],
        userIds: [2],
      },
      type: 'category',
      id: 1,
      getItems: jest.fn(),
      getCategoryItems: jest.fn(),
    };
  });

  it('should render list-items', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getCategoryItems in componentDidMount', () => {
    setup();
    expect(props.getCategoryItems).toHaveBeenCalled();
  });

  it('should call getItems in componentDidMount', () => {
    setup();
    wrapper.setProps({
      ...props,
      type: 'home',
      id: '',
    });
    expect(props.getItems).toHaveBeenCalled();
  });
});
