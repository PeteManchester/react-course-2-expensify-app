import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  //expense = {this.props.expense};
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm 
        expense={this.props.expense} 
        onSubmit={this.onSubmit}             
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

// const EditExpensePage = (props) => {
//     console.log(props);
//     return (
//         <div>
//         You want to edit Expense {props.match.params.id}
//         <ExpenseForm
//             expense = {props.expense}
//             onSubmit={(expense) => {
//                 props.dispatch(editExpense(props.expense.id,expense));
//                 props.history.push('/');
//             }}
//         />
//         <button onClick={() => {
//             props.dispatch(removeExpense({id:props.expense.id}));
//             props.history.push('/');
//         }
//         }>Remove</button>
//         </div>
//     );
// }

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  editExpense: (id,expense) => dispatch(editExpense(id,expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
