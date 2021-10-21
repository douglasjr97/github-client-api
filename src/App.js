import './App.css';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {

  if(query === ""){
    setQuery("a");
  }
    setIsLoading(true);
    await fetch(`https://api.github.com/search/users?q=${query}`)
      .then((response) => response.json())
      .then((data) => { setSearchResults(data.items) });

    setIsLoading(false)
  }

  return (
    <main>

      <section className="search">
        <input type="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Username" />

        <button onClick={handleSearch}>
          {isLoading ? "Pesquisando..." : "Pesquisar"}
        </button>

        {!!searchResults.length && (
        <>
        <h1>Resultados da Busca</h1>

        <ul>
          {searchResults.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={`Foto de ${user.login}`} />

              {user.login}

              {userName === user.login ? (
                "✅") : (
                <button onClick={() => setUserName(user.login)}>Selecionar</button>
              )}
            </li>
          ))}
        </ul>
        </>
        )}
       
      </section>

      <section className="repos">Repositório</section>
    </main>
  );
}

export default App;
