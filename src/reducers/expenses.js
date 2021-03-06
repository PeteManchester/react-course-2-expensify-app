
//Expense Reducer
const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
            case 'REMOVE_EXPENSE':
                //console.log(`Remove: ${action.id}`);
                return state.filter(({id}) => id !== action.id);  
            case 'EDIT_EXPENSE':
                //console.log('Edit Expense: ' + action.updates);
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

