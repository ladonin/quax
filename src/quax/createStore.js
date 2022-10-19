export const createStore = (reducer) => {
  let state = reducer(undefined, {});

  const subscribers = [];

  return {
    subscribe(logic) {
      subscribers.push(logic);
    },
    dispatch(action) {
      reducer(state, action);
      subscribers.forEach((logic) => logic());
    },
    getState() {
      return reducer(undefined, {});
    }
  };
};
