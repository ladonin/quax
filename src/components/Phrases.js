import { useQuaxSelector } from "../quax";

export const Phrases = function () {
  const phrases = useQuaxSelector(({ phrases }) => {
    return Object.values(phrases);
  });

  const renderPhrases = () => phrases.map((phrase) => <div>{phrase}</div>);
  return (
    <div
      style={{
        padding: 16,
        background: "#efefef",
        border: "1px solid black"
      }}
    >
      <div>ALL PHRASES:</div>
      {renderPhrases()}
    </div>
  );
};
