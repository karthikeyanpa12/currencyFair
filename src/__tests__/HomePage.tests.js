import React from 'react';
import "babel-polyfill";
import HomePage from '../HomePage';
import { shallow } from 'enzyme';

describe('HomePage', () => { 
    const tree = shallow(<HomePage />);

    test('renders correctly', async () => {
        expect(tree).toMatchSnapshot();
    });

});
