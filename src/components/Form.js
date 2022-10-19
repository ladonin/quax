import { Input } from "./Input";
import { Button } from "./Button";
import { useQuaxDispatch, useQuaxSelector } from "../quax";
import { addPhrase, setLastSymbol, setText } from "../logic/actions";

const useDebounce = (ms) => {
  let timerRef;

  return (fn) => {
    clearTimeout(timerRef);
    timerRef = setTimeout(fn, ms);
  };
};

export const Form = function () {
  const dispatch = useQuaxDispatch();
  const inputValue = useQuaxSelector(({ currentText }) => currentText);

  const debounce = useDebounce(300);

  const onInputChange = (newValue) => {
    debounce(() => {
      const typedAt = new Date();
      const value = newValue.at(-1);
      const code = value.charCodeAt(0);
      dispatch(setLastSymbol({ typedAt, code, value }));
    });
    dispatch(setText(newValue));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addPhrase(inputValue));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input inputValue={inputValue} onInputChange={onInputChange} />
      <Button type={"submit"} text={"SUBMIT"} />
    </form>
  );
};
