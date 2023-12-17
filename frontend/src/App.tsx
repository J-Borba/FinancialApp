import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/index';
import SearchBar from './Components/SearchBar';

function App() {
  const [search, setSearch] = useState<string>("");

  const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnClick = (e : SyntheticEvent) => {
    console.log(e);
  }; 

  return (
    <div className="App">
      <SearchBar handleOnClick={ handleOnClick } handleOnChange={ handleOnChange } search={ search } />
      <CardList />
    </div>
    );
}

export default App;
