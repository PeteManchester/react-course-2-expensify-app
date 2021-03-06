import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () =>{
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should add expense ', () => {

    const expense = {
        id: '109',
        description: 'Broadband',
        amount: 29000,
        note: '',
        createdAt: 20000
    };
    const action ={
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense] );
});

test('should edit expense ', () => {
    const amount = 122000

    const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should edit expense if id not found ', () => {
    const amount = 122000

    const action ={
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

