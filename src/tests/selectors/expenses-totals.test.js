import React from 'react';
import {shallow} from 'enzyme';
import selectExpensesTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expense-total';

const total = selectExpensesTotal(expenses);
console.log(total);

test('should return zero if no expenses', () =>{    
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should return zero if  expenses is undefined', () =>{    
    const result = getExpensesTotal();
    expect(result).toBe(0);
});

test('should return 195 for single expense', () =>{    
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('should sum expenses', () =>{    
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});