import {
  configure, shallow, mount, render,
} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';

// Enzyme config
configure({ adapter: new Adapter() });

let apiHost;

if (process.env.ENV === 'dev') {
  apiHost = 'http://locahost:5000';
} else if (process.env.ENV === 'pro') {
  apiHost = 'http://localhost:5000';
} else {
  apiHost = 'http://localhost:5000';
}

export {
  shallow, mount, render, apiHost,
};
