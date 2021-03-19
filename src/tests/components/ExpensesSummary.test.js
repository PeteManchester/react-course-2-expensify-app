import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render expense summary with one expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={1233}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense summary with expenses', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={12334462564563562}/>);
    expect(wrapper).toMatchSnapshot();
});


