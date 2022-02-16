const Letter = () => {
  return (
    <div className="letter">
      <p>A</p>
    </div>
  );
};

const Row = () => {
  return (
    <div className="row">
      <Letter />
      <Letter />
      <Letter />
    </div>
  );
};

export default Row;