import FoodDropList from "./components/FoodDropList"
import RecipiesTable from "./components/RecipiesTable"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <FoodDropList />
        </section>


        <section>
          <RecipiesTable />
        </section>


      </header>
    </div>
  );
}

export default App;
