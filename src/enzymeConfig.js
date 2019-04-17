import {
  configure, shallow, mount, render,
} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';

// Enzyme config
configure({ adapter: new Adapter() });

export { shallow, mount, render };
