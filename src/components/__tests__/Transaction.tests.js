import React from 'react';
import "babel-polyfill";
import { Transaction } from '../Transaction';
import { shallow } from 'enzyme';

describe('Transaction', () => {
    const transaction = { rate: 0.5, fee: 2.5, deliveryDate: '29-sep-2019' }
    const tree = shallow(<Transaction getTransaction={jest.fn()} transaction={transaction} />);
    let instance = tree.instance();

    test('renders correctly', async () => {
        expect(tree).toMatchSnapshot();
    });

    test('enableModal', async () => {
        await instance.enableModal();
        expect(instance.state.showModal).toBe(true);
    });

    test('onClose', async () => {
        await instance.onClose();
        expect(instance.state.showModal).toBe(false);
    });

});
