const Part = function (props) {
    const { part} = props



  return (
    <p>
      {part.name} {part.exercsies}
    </p>
  );
};

export { Part };
