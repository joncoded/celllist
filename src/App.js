import React from 'react';
import CellList from './components/CellList/CellList';
import './index.css';

/* data source */
import { config, items } from './data/SampleData';

function App() {
  
  return (
    <div className="App">
      {/* place in a header component in the future */}
      <h1>cellList (Demo)</h1>
      <p>(click on a column to sort it and change its order)</p>
      {/* this is it */}
      <CellList config={config} items={items} />
    </div>
  );

}

export default App;