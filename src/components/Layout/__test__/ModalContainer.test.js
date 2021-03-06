import React from 'react';
import { shallow } from 'enzymeConfig';
import { ModalContainer } from 'components/Layout/ModalContainer';

describe('components/Layout/ModalContainer', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(
      <ModalContainer {...props} />,
    );
  };

  beforeEach(() => {
    props = {
      modal: 'login',
    };
  });

  it('should render login modal', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should render signup modal', () => {
    props.modal = 'signup';
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should render addItem modal', () => {
    props.modal = 'addItem';
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });

  it('should render editItem modal', () => {
    props.modal = 'editItem';
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
