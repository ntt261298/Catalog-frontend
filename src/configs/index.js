import dev from 'configs/dev';
import pro from 'configs/pro';

let configs;

if (process.env.REACT_APP_ENV === 'dev') {
  configs = dev;
} else if (process.env.REACT_APP_ENV === 'pro') {
  configs = pro;
} else {
  // Default configs is dev
  configs = dev;
}

export default configs;
