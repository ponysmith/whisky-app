import { shallow } from 'enzyme';
import App from './App';

test('renders the #app-container', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('#app-container')).toBe(true);
});
