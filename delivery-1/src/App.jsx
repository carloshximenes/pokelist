import "./App.css";
import pokemonList from "./assets/images/images";
import { getPokemonNameFromImage } from "./utils/pokemon.util";
import Card from "./components/Card";
import List from "./components/List";

const App = () => {
  return (
    <>
      <h1>Pokemon List</h1>
      <List>
        {pokemonList.map((src, index) => (
          <Card key={index} image={src} name={getPokemonNameFromImage(src)} />
        ))}
      </List>
    </>
  );
};

export default App;
