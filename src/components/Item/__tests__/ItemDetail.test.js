import React from 'react';
import { shallow } from '../../../enzyme';
import { ItemDetail } from '../ItemDetail';

describe('src/components/Item/ItemDetail', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <ItemDetail {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      item:
         [
           {
             id: 1,
             items: [],
             name: 'Item 1',
           },
         ],
      params: {
        categoryID: 1,
        itemID: 1,
      },
      getItem: jest.fn().mockImplementation(() => Promise.resolve('message')),
      hideModal: jest.fn(),
      showDeleteItem: jest.fn(),
    };
  });

  it('should render detail Item ', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getItem in componentDidMount', () => {
    setup();
    expect(props.getItem).toHaveBeenCalled();
  });
});
