import React from 'react';
import "babel-polyfill";
import {SendDetails} from '../SendDetails';
import { shallow } from 'enzyme';

describe('Send Details', () => {
    const transaction = { rate: 0.5, fee: 2.5, deliveryDate: '29-sep-2019' }
    const tree = shallow(<SendDetails transaction={transaction} />);

    test('renders correctly', async () => {
        expect(tree).toMatchSnapshot();
    });

});
