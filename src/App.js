import { useState } from 'react';
import './App.css';
import Recommend from './components/RecommendationBox/Recommend';
import Search from './components/Search_box/Search';
import Shop from './components/Shop/Shop';
import RecommendationContext from './context/RecommendationContext';
import ShopContext from './context/ShopContext';;
function App() {
  const [recommendation,setRecommendation] = useState(false)
  const [shop,setShop] = useState(false)
  const [searchTerm,setSearchTerm]=useState("")
  const handleRecommendation=()=>{
    setRecommendation(true);
  }
  const handleShop=()=>{
    if(searchTerm!=="")
    setShop(true);
    else
    alert("Enter something in the search box")
  }
  return (<>
  {shop?(
    <ShopContext.Provider  value={[shop,setShop]}>
    <Shop setSearchTerm={setSearchTerm}/>
    </ShopContext.Provider>
    )
  :
  ( <div className="App" >
     <div id='zevi-icon'>
       <img src='./logo.jpg' alt='logo' width="86px" height="45px"/>
     </div>
   <div className="search-bar-container" >
     <Search recommendation={handleRecommendation} shop={handleShop} setSearchTerm={setSearchTerm}/>
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
   </div>)}
   </>
   );
}

export default App;
