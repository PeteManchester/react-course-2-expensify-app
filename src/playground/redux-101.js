import {createStore} from 'redux';

    const incrementCount = ({ incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });

    const decrementCount = ({ decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
    });

    const setCount = ({ count } = {}) => ({
        type: 'SET',
        count
    });

    const resetCount = () => ({
        type: 'RESET'
    });

    //Reducers
    // 1. Reducers are pure functions
    // 2. Never changes state or action

    const countReducer = (state= {count: 0}, action)=>{   
        console.log(action);         
        switch(action.type){
            case 'INCREMENT':    
            console.log('Increment');            
                return{                    
                    count: state.count + action.incrementBy
                    }
            case 'DECREMENT':
                console.log('Decrement');          
                return{                    
                    count: state.count - action.decrementBy
                    }
            case 'RESET':
                return{
                    count: 0
                    }
            case 'SET':
                return{
                    count: action.count
                }
            default:
                return state;
        }

};


    const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount(10));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 15}));
store.dispatch(resetCount());






