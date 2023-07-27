import { useState } from 'react';
import './App.css';
import Recommend from './components/RecommendationBox/Recommend';
import Search from './components/Search_box/Search';
import RecommendationContext from './context/RecommendationContext';
function App() {
  const [recommendation,setRecommendation] = useState(false)
  const handleRecommendation=()=>{
    setRecommendation(true);
  }
  return (
    <div className="App" >
      <div id='zevi-icon'>
        <img src='./Assets/ZEVI.jpg' alt='logo'/>
      </div>
    <div className="search-bar-container" >
      <Search recommendation={handleRecommendation}/>
    </div>
      <RecommendationContext.Provider value={[recommendation,setRecommendation]}>
    {
      recommendation?(
        <div id='box'>
        <Recommend/>
        </div>
      ):
      (
        <div></div>
      )
    }
    </RecommendationContext.Provider>
    </div>
  );
}

export default App;
