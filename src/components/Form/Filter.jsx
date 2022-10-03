export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by Name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
