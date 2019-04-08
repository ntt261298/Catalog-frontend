import React from 'react';
import { shallow } from '../../../enzyme';
import Category from '../Category';

describe('src/components/commons/Category', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Category {...props} />,
    );
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
      getCategories: jest.fn(),
    };
  });

  it('should render list-categories', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getCategories in componentDidMount', () => {
    setup();
    wrapper.update();
    // Expect the wrapper object to be defined
    expect(props.getCategories).toHaveBeenCalled();
  });
});
