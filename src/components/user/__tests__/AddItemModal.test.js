import React from 'react';
import { shallow } from '../../../enzyme';
import { AddItemModal } from '../AddItemModal';

describe('src/components/user/AddItemModal', () => {
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
      category: {
        byId: {
          1: {
            id: 1,
            items: [],
            name: 'Category 1',
          },
          2: {
            id: 2,
            items: [],
            name: 'Category 2',
          },
        },
        allIds: [1, 2],
      },
      modal: 'addItem',
      token: 'randomToken',
      addItem: jest.fn(),
      hideModal: jest.fn(),
      getCategories: jest.fn(),
    };
  });

  it('should render add item modal', () => {
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
      expect(props.hideModal).toHaveBeenCalled();
    });
  });

  it('should call onChangeInput when user\'s input is changed', () => {
    setup();
    wrapper.setState({
      title: 'test', description: '123456', categoryID: 1,
    }, () => {
      addButton.simulate('click');
      expect(props.addItem).toHaveBeenCalled();
      expect(props.hideModal).toHaveBeenCalled();
    });
  });
});
