import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE

// Set Text Filter
// Sort by Date
// Sort by Amount
// SET_START_DATE


const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) =>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
            case 'REMOVE_EXPENSE':
                console.log('Remove: ${id}');
                return state.filter(({id}) => id !== action.id);  
            case 'EDIT_EXPENSE':
                console.log('Edit Expense');
                return state.map((expense) => {
                    if(expense.id === action.id){
                        return {
                            ...expense,
                            ...action.updates
                        }
                    }
                    else{
                        return expense;
                    }
                });

        default:
            return state;
    }
};

//Filters Reducer


const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
});

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
});

const sortByDate = () =>({
    type:'SORT_BY_DATE'
});

const setStartDate = (startDate) =>({
    type:'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) =>({
    type:'SET_END_DATE',
    endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return  {
               ...state,
               text: action.text 
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case  'SET_START_DATE':
            return{
                    ...state,
                startDate: action.startDate
            };
        case  'SET_END_DATE':
            return{
                    ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

//Get visible expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number'|| expense.createdAt >= startDate;
        const endDateMatch= typeof endDate !== 'number'|| expense.createdAt <= endDate;
        const textMatch = typeof text === undefined || expense.description === undefined|| expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount?1:-1;
        }
    });
};


// Store Creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300, createdAt: -1000 }));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
console.log('Only RENT');
//store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000));


const demoState = {
    expenses: [{
        id:'sfsdfsdfsf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', //Date or Amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name:'Jen',
    age:24
}
console.log('PETE WAS ERE')
console.log({
    ...user,
    location: 'Middleton',
    age: 27
});
