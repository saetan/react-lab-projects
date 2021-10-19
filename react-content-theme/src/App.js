import React, { useState } from 'react';
import './styles.css';
import LeftComp from './LeftComp';
import RightComp from './RightComp';
import DataContext from './context/DataContext';



const themes = {
  light: {
    background: 'lightblue',
    color: 'black'
  },
  dark: {
    background: '#222222',
    color: 'white'
  }
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);

  const handleClick = () => {
    setActiveTheme(activeTheme === themes.light ? themes.dark : themes.light);
  }
  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <button onClick={handleClick}>Toggle Themes</button>
      <div className="children">
        <DataContext.Provider value={activeTheme}>
          <LeftComp />
          <RightComp />
        </DataContext.Provider>
      </div>
    </div>
  );
}
