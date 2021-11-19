import { useContext, createContext, useReducer } from "react";

export const CounterContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      // code here
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

function CounterProvider({ children }) {
  // useReducer
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  // Make variable `value` and assign state & dispatch
  const value = {
    state: state,
    dispatch: dispatch,
  };

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CounterContext);

  if (context === "undefined") {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};

export { CounterProvider, useCount };
