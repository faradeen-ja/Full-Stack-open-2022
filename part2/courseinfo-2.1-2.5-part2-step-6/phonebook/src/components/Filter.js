import { handleChange } from "../utils";

const Filter = function (props) {
  const { searchName, setSearchName } = props;

  return (
    <div>
      Filter shown with:{" "}
      <input value={searchName} onChange={handleChange(setSearchName)} />
    </div>
  );
};

export { Filter };
