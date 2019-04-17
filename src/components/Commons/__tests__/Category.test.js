import React from 'react';
import { shallow } from 'enzymeConfig';
import { Category } from 'components/Commons/Category';

describe('components/Commons/Category', () => {
  let wrapper;
  let props;
  let linkCategory;

  const update = () => {
    linkCategory = wrapper.find('Link');
  };

  const setup = () => {
    wrapper = shallow(
      <Category {...props} />,
    );
    wrapper.instance().setActiveCategory = jest.fn();
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
      getCategories: jest.fn().mockImplementation(() => Promise.resolve('message')),
    };
  });

  it('should render list-categories', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getCategories in componentDidMount', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(props.getCategories).toHaveBeenCalled();
  });

  it('should call activeCategory when Link is clicked', () => {
    setup();
    // Expect the wrapper object to be defined
    linkCategory.at(0).simulate('click');
    expect(wrapper.instance().setActiveCatagory).toHaveBeenCalled();
  });
});
