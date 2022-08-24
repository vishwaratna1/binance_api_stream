import './App.css';
import DisplayData from './Views/DisplayData';
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000")

function App() {

  return (
    <div className="App">
      <DisplayData socket={socket}/>
    </div>
  );
}

export default App;
