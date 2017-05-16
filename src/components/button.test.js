import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  it('renders without crashing', () => {
    const component = shallow(<Button>hello</Button>);
    expect(component.text()).toBe('hello');
  });

  it('calls the action when clicked', () => {
    const fn = jest.fn();
    const component = shallow(<Button action={fn}>hello</Button>);
    expect(fn.mock.calls.length).toBe(0);
    component.simulate('click');
    expect(fn.mock.calls.length).toBe(1);    
  })
})
