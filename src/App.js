import { useState } from 'react';
import './App.css';
import logo from './Assets/logo.jpg'
import Recommend from './components/RecommendationBox/Recommend';
import Search from './components/Search_box/Search';
import Shop from './components/Shop/Shop';
import RecommendationContext from './context/RecommendationContext';
import ShopContext from './context/ShopContext';;
function App() {
  const [recommendation,setRecommendation] = useState(false)
  const [shop,setShop] = useState(true)  //on complition turn to false
  const [searchTerm,setSearchTerm]=useState("")
  const handleRecommendation=()=>{
    setRecommendation(true);
  }
  const handleShop=()=>{
    if(searchTerm!=="")
    { 
      if(!shop)
      setShop(true);
    }
    else
    alert("Enter something in the search box")
  }
  return (<>
  {shop?(
    <ShopContext.Provider  value={[shop,setShop]}>
    <Shop shope={handleShop} setSearchTerm={setSearchTerm}/>
    </ShopContext.Provider>
    )
  :
  ( <div className="App" >
     <div id='zevi-icon'>
       <img src={logo} alt='logo' width="86px" height="45px"/>
     </div>
   <div className="search-bar-container" >
     <Search recommendation={handleRecommendation} shope={handleShop} setSearchTerm={setSearchTerm}/>
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
