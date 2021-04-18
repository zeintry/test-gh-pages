import './App.css';
import NetworkTopology from './NetworkTopology/NetworkTopology';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="text">
              <div id="title">
                  <h1>CPSC 447 Group 9 Network visualization!</h1>
              </div>
              <div id="Algorithm Summary">
                <h2>Algorithm:</h2>
                <p>We are Implementing Open Shortest Path First (OSPF) as our link-state routing protocl.</p>
              </div>
          </div>
      </header>

      <NetworkTopology />
    </div>
  );
}

export default App;
