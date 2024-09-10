import React from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  //штука для того чтобы функуция не пересоздавалась
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 270),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      {/* Отслеживаемый инпут, когда нажимаем на крестик, то данные очищаються */}
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Пошук піцци..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fillRule="evenodd"
            points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
