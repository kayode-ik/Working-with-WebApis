import { useReducer, useState } from "react";
import "./reducerApp.css";
const ReducerApp = () => {
  const [count, setCount] = useState(0);

  const Reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          count: state.count + 1
        };
      case "SUB":
        return {
          count: state.count - 1
        };
      case "ADD10":
        return {
          count: state.count + 10
        };
      case "SUB10":
        return {
          count: state.count - 10
        };
      case "RESET":
        return {
          count: 0
        };

      default:
        return count;
        break;
    }
  };

  const [state, dispatch] = useReducer(Reducer, { count: 0 });
  return (
    <>
      <h1>useReducer</h1>
      <p>Count is : {state.count}</p>

      <div className="buttonApp1">
        {/* Add 1 */}
        <div className="add1">
          <button
            onClick={() => {
              dispatch({ type: "ADD" });
            }}
          >
            Add 1
          </button>
        </div>
        {/* subtract 1 */}
        <div className="sub1">
          <button
            onClick={() => {
              dispatch({ type: "SUB" });
            }}
          >
            Sub 1
          </button>
        </div>
      </div>
      <div className="buttonApp2">
        {/* Add 10 */}
        <div className="add10">
          <button
            onClick={() => {
              dispatch({ type: "ADD10" });
            }}
          >
            Add 10
          </button>
        </div>
        {/* subtract 10 */}
        <div className="sub10">
          <button
            onClick={() => {
              dispatch({ type: "SUB10" });
            }}
          >
            Sub 10
          </button>
        </div>
      </div>
    </>
  );
};

export default ReducerApp;
