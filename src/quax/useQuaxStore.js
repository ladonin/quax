import React, { useEffect, useState } from "react";

const quaxContext = React.createContext();

export const QuaxProvider = function ({ store, children }) {
  return <quaxContext.Provider value={store}>{children}</quaxContext.Provider>;
};

export const useQuaxStore = () => {
  return React.useContext(quaxContext);
};

export const useQuaxDispatch = () => {
  console.log(useQuaxStore());
  const dispatch = useQuaxStore().dispatch;
  return (action) => dispatch(action);
};

export const useQuaxSelector = (selector) => {
  const quaxStore = useQuaxStore();
  const [value, setValue] = useState(selector(quaxStore.getState()));

  useEffect(() => {
    quaxStore.subscribe(() => {
      setValue(selector(quaxStore.getState()));
    });
  }, [value]);

  return value;
};
