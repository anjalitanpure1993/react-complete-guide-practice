import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-wrapper">
      <div className="expense-date">May 29, 2021</div>
      <div className="expense-desc">
        <h2>Car Insurance</h2>
        <div className="expense-price">$32.0</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
