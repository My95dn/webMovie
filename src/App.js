
import './App.css';
import Header from './components/navbar/header';
import DemoSlider from './demo/demoMovie';

import React, { useEffect, useState } from 'react';
import Slider from './showmovie/slider';
import styled from 'styled-components';


 
export  const Context = React.createContext();
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(res => res.json())
    .then(data => {
      setData(data.results)
    })
  }, [])
  return (
    <Context.Provider value={data}>
      
      <Section className="App">

          <Header />
          <DemoSlider />
          <Slider  />
          </Section>
          
    </Context.Provider>
  );
}

export default App;
const Section = styled.div`
overflow: hidden;
`
