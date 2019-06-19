import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Message from './../js/Message';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() })

describe('<Message />', () => {
  test('renders a single <p> tag', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
})