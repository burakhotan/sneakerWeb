import React from 'react';
import './App.css';
//Components
import Sneakers from '../src/Components/Sneakers';
import NavBar from '../src/Components/NavBar';
function App() {
  const sneakers= [
    {
    id:"1",
    name:"Jordan 1 Mid Chicago Toe",
    price:"115$",
    image:"https://stockx.imgix.net/Air-Jordan-1-Mid-Chicago-Black-Toe-GS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1583988027"
},
{
  id:"2",
  name:"Jordan 1 Retro High Court Purple White",
  price:"170$",
  image:"https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Court-Purple-White/Images/Air-Jordan-1-Retro-High-Court-Purple-White/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1594243790"
},
{
  id:"3",
  name:"Jordan 1 Retro High Pine Green Black",
  price:"170$",
  image:"https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Pine-Green-Black/Images/Air-Jordan-1-Retro-High-Pine-Green-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1581447019"
}
];
  return (
    <div className="App">
      <NavBar/>
      <Sneakers sneakers={sneakers}/>
    </div>
  );
}

export default App;
