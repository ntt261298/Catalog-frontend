import React from 'react';
import { shallow } from '../../../enzyme';
import { EditItemModal } from '../EditItemModal';

describe('src/components/user/EditItemModal', () => {
  let wrapper;
  let props;
  let editButton;

  const update = () => {
    editButton = wrapper.find('Button');
  };

  const setup = () => {
    wrapper = shallow(
      <EditItemModal {...props} />,
    );
    update();
  };

  beforeEach(() => {
    props = {
      categories: [
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
      item: {
        itemID: 1,
        title: 'one',
        description: 'one',
        categoryID: 1,
      },
      modal: 'editItem',
      editItem: jest.fn().mockImplementation(() => Promise.resolve('message')),
      hideModal: jest.fn(),
      getUserItems: jest.fn().mockImplementation(() => Promise.resolve('message')),
      getCategories: jest.fn().mockImplementation(() => Promise.resolve('message')),
    };
  });

  it('should render add edit modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call editItem when edit button is clicked', () => {
    setup();
    wrapper.setState({
      title: 'test', description: '123456', categoryID: 1,
    }, () => {
      editButton.simulate('click');
      expect(props.editItem).toHaveBeenCalled();
    });
  });

  it('should set message \'Title must not be blank\' when title\'s input is blank', () => {
    setup();
    wrapper.setState({
      title: '', description: '123456', categoryID: 1,
    }, () => {
      editButton.simulate('click');
      expect(props.addItem).not.toHaveBeenCalled();
    });
  });

  it('should set message \'Description must not be blank\' when description\'s input is blank', () => {
    setup();
    wrapper.setState({
      title: 'title', description: '', categoryID: 1,
    }, () => {
      editButton.simulate('click');
      expect(props.editItem).not.toHaveBeenCalled();
    });
  });
});
