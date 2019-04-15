import React from 'react';
import { shallow } from 'configs';
import { UserItems } from 'components/User/UserItems';

describe('components/User/UserItems', () => {
  let wrapper;
  let props;
  let deleteSpan;
  let editSpan;
  let deleteButton;

  const update = () => {
    deleteSpan = wrapper.find('span.delete');
    editSpan = wrapper.find('span.edit');
    deleteButton = wrapper.find('Button');
  };

  const setup = () => {
    wrapper = shallow(
      <UserItems {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      items: [
        {
          id: 1,
          items: [],
          name: 'Item 1',
        },
        {
          id: 2,
          items: [],
          name: 'Item 2',
        },
      ],
      modal: '',
      token: 'randomToken',
      addItem: jest.fn().mockImplementation(() => Promise.resolve('message')),
      hideModal: jest.fn(),
      getUserItems: jest.fn().mockImplementation(() => Promise.resolve('message')),
      showAddItem: jest.fn(),
      showEditItem: jest.fn(),
      setCurrentItem: jest.fn(),
      showDeleteItem: jest.fn(),
      deleteItem: jest.fn().mockImplementation(() => Promise.resolve('message')),
    };
  });

  it('should render add User\'s Item ', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onShowDeleteItem when delete span is clicked', () => {
    setup();
    deleteSpan.at(0).simulate('click');
    expect(props.showDeleteItem).toHaveBeenCalled();
    update();
  });

  it('should call onShowEditItem when edit span is clicked', () => {
    setup();
    editSpan.at(0).simulate('click');
    expect(props.showEditItem).toHaveBeenCalled();
    update();
  });

  it('should call deleteItem when delete button is clicked', () => {
    setup();
    deleteButton.simulate('click');
    expect(props.deleteItem).toHaveBeenCalled();
  });
});
