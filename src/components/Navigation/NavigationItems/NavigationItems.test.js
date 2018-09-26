import React from 'react'

import {configure, shallow} from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems'

import NavigationItem from '../NavigationItem/NavigationItem'

configure({adapter: new Adapter()});

describe('<Navigations Items/>',() => {

it('should render two <Navigationtem/> element if not authenticated',() => {

    const Wrapper = shallow(<NavigationItems/>);
    expect(Wrapper.find(NavigationItem)).toHaveLength(2);

});


});
