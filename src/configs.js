import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme config
configure({ adapter: new Adapter() });

// API host config
const defaultHost = 'http://localhost:5000';

export {
  shallow, mount, render, defaultHost,
};
