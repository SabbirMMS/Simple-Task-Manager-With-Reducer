/* eslint-disable react/prop-types */
const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </>
  );
};

export default Counter;
