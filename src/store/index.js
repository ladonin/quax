import { createStore } from "../quax";
import { reducer } from "../logic/reducer";

export const store = createStore(reducer);
