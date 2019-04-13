import React from 'react';
import { shallow } from '../../../enzyme';
import { AddItemModal } from '../AddItemModal';

describe('src/components/User/AddItemModal', () => {
  let wrapper;
  let props;
  let addButton;

  const update = () => {
    addButton = wrapper.find('Button');
  };

  const setup = () => {
    wrapper = shallow(
      <AddItemModal {...props} />,
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
      modal: 'addItem',
      addItem: jest.fn().mockImplementation(() => Promise.resolve('message')),
      hideModal: jest.fn(),
      getUserItems: jest.fn().mockImplementation(() => Promise.resolve('message')),
      getCategories: jest.fn().mockImplementation(() => Promise.resolve('message')),
    };
  });

  it('should render add Item modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when add button is clicked', () => {
    setup();
    wrapper.setState({
      title: 'test', description: '123456', categoryID: 1,
    }, () => {
      addButton.simulate('click');
      expect(props.addItem).toHaveBeenCalled();
    });
  });

  it('should set message \'Title must not be blank\' when title\'s input is blank', () => {
    setup();
    wrapper.setState({
      title: '', description: '123456', categoryID: 1,
    }, () => {
      addButton.simulate('click');
      expect(props.addItem).not.toHaveBeenCalled();
    });
  });

  it('should set message \'Description must not be blank\' when description\'s input is blank', () => {
    setup();
    wrapper.setState({
      title: 'title', description: '', categoryID: 1,
    }, () => {
      addButton.simulate('click');
      expect(props.addItem).not.toHaveBeenCalled();
    });
  });
});
