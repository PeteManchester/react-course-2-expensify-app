//Get visible expenses
const getExpensesTotal = (expenses) => {
  if(expenses){
  const sum = expenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
  return sum;}
  else{
    return 0;
  }
};

export default getExpensesTotal