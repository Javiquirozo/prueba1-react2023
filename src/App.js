import { useState } from 'react';
import MiApi from './components/MiApi'

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="containerCatFacts">
      <h1> 🐱 Cat Facts </h1>

      <input
        type="text"
        placeholder="Search a fact cat 🐈‍⬛"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="containerSearchCatFacts"
      />

      <MiApi search={search}/>
    </div>
  );
}

