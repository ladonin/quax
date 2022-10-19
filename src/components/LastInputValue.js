import { useQuaxSelector } from "../quax";

export const LastInputValue = () => {
  const { typedAt, value } = useQuaxSelector(({ lastSymbol }) => {
    const { code, ...data } = lastSymbol;
    return data;
  });

  const renderDate = () => {
    if (!typedAt) return null;
    return <div>Typed ad {typedAt.toLocaleTimeString()}</div>;
  };

  return (
    <div
      style={{
        padding: 16,
        background: "#efefef",
        border: "1px solid black"
      }}
    >
      <div>Last char is {value}</div>
      {renderDate()}
    </div>
  );
};
