import {
  configure, shallow, mount, render,
} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import dev from 'configs/dev';
import pro from 'configs/pro';

// Enzyme config
configure({ adapter: new Adapter() });

let configs;

if (process.env.ENV === 'dev') {
  configs = dev;
} else if (process.env.ENV === 'pro') {
  configs = pro;
} else {
  // Default configs is dev
  configs = dev;
}

export { shallow, mount, render };

export default configs;
