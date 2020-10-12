import React from 'react';
import Card from './Card';
import './App.css';
import Sdata from "./Sdata";

function App() {
return(
<>
{Sdata.map((val)=>{
  return (
  <Card
  img={val.img}
  title={val.title}
  link={val.link}
  />);
})}
</>
  )

}

export default App;
