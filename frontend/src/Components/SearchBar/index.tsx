import { ChangeEvent, SyntheticEvent } from "react";
import "./styles.css"

interface IProps {
  handleOnClick : (e : SyntheticEvent) => void;
  handleOnChange : (e : ChangeEvent<HTMLInputElement>) => void;
  search : string | undefined;
};

const SearchBar : React.FC<IProps> = ({ handleOnClick, handleOnChange, search } : IProps) : JSX.Element => {
  return (
    <div>
      <input type="text" value={ search } placeholder="Search bar" onChange={ (e) => handleOnChange(e) } />
      <button onClick={ (e) => handleOnClick(e) }>Click Me</button>
    </div>
  );
};

export default SearchBar;