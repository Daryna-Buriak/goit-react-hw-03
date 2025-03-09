import css from "./SeacrhBox.module.css";

export default function SearchBox({ input, onFilter }) {
  const handleChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
}
