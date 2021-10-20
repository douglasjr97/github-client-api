import './App.css';
import { useState } from 'react';

function App() {
    const [query, setQuery] = useState("");
    // const [searchResult, setSearchResult] = useState([]);
    // const [userName, setUserName] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async() => {
      await fetch(`https://api.github.com/search/users?q=${query}`)
      .then((response) => response.json())
      .then((data) => {console.log(data)});
    }
  return (
    <main>

   <section className="search">
     <input type="search" value={query} onChange={({target}) => setQuery(target.value)} placeholder="Username" readOnly={true}/>
     <button onClick={handleSearch}>Pesquisar</button>
   </section>

   <section className="repos">Repositório</section>
   </main>
  );
}

export default App;
