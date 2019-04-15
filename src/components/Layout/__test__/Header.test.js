import React from 'react';
import { shallow } from 'configs';
import { Header } from 'components/Layout/Header';

describe('components/Layout/Header', () => {
  let wrapper;
  let props;
  const setup = () => {
    wrapper = shallow(
      <Header {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      loggedIn: false,
    };
  });

  it('should render header', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should render header with dropdown User', () => {
    props.loggedIn = true;
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
