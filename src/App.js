import RecipiesTable from "./components/RecipiesTable"
import './App.css';
import IngredientsFilter from "./components/IngredientsFilter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <IngredientsFilter />         
        </section>

        <section>
          <RecipiesTable />
        </section>


      </header>
    </div>
  );
}

export default App;
