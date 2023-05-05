import "./App.css";
import pokemonList from "./assets/images/images";
import Card from "./components/Card";
import List from "./components/List";

const App = () => {
  return (
    <>
      <h1>Pokemon List</h1>
      <List>
        {pokemonList.map((pkm, index) => (
          <Card key={pkm.id} image={pkm.src} name={pkm.name} />
        ))}
      </List>
    </>
  );
};

export default App;
