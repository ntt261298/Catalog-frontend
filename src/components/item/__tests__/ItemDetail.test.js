import React from 'react';
import { shallow } from '../../../enzyme';
import { ItemDetail } from '../ItemDetail';

describe('src/components/item/ItemDetail', () => {
  let wrapper;
  let props;
  let deleteSpan;
  let deleteButton;

  const update = () => {
    deleteButton = wrapper.find('Button');
  };

  const setup = () => {
    wrapper = shallow(
      <ItemDetail {...props} />,
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
        itemId: [1],
        modal: '',
      },
      modal: '',
      token: 'randomToken',
      params: {
        categoryID: 1,
        itemID: 1,
      },
      getItem: jest.fn(),
      hideModal: jest.fn(),
      showDeleteItem: jest.fn(),
      deleteItem: jest.fn(),
    };
  });

  it('should render detail item ', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(props.getItem).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });


  it('should call deleteItem and hideModal when delete button is clicked', () => {
    setup();
    deleteButton.simulate('click');
    expect(props.deleteItem).toHaveBeenCalled();
    expect(props.hideModal).toHaveBeenCalled();
  });
});
