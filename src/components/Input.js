export const Input = function ({ inputValue, onInputChange }) {
  const onChange = ({ target }) => {
    onInputChange(target.value);
  };

  return <input type={"text"} onChange={onChange} value={inputValue} />;
};
