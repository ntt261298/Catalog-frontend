import React from 'react';
import { shallow } from '../../../enzyme';
import { UserItem } from '../UserItem';

describe('src/components/user/UserItem', () => {
  let wrapper;
  let props;
  let deleteSpan;
  let deleteButton;

  const update = () => {
    deleteSpan = wrapper.find('.delete');
    deleteButton = wrapper.find('Button');
  };

  const setup = () => {
    wrapper = shallow(
      <UserItem {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      item: {
        byId: {
          1: {
            id: 1,
            items: [],
            name: 'Item 1',
          },
          2: {
            id: 2,
            items: [],
            name: 'Item 2',
          },
        },
        allIds: [1, 2],
        userIds: [1],
        modal: '',
      },
      modal: '',
      token: 'randomToken',
      addItem: jest.fn(),
      hideModal: jest.fn(),
      getUserItems: jest.fn(),
      showAddItem: jest.fn(),
      showDeleteItem: jest.fn(),
      deleteItem: jest.fn(),
    };
  });

  it('should render add user\'s item ', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onShowDeleteItem when delete span is clicked', () => {
    setup();
    deleteSpan.simulate('click');
    expect(props.showDeleteItem).toHaveBeenCalled();
    update();
  });

  it('should call deleteItem and hideModal when delete button is clicked', () => {
    setup();
    deleteButton.simulate('click');
    expect(props.deleteItem).toHaveBeenCalled();
    expect(props.hideModal).toHaveBeenCalled();
  });
});
