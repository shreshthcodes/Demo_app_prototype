import './App.css';
import Search from './Search_box/Search';
function App() {
  return (
    <div className="App">
      <div id='zevi-icon'>
        <img src='./Assets/ZEVI.jpg' alt='logo'/>
      </div>
    <div className="search-bar-container">
      <Search/>
    </div>
    </div>
  );
}

export default App;
