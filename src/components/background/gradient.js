import React from 'react'

const ColorBar = ({color1="red"}) => {
    const rgb = [color1.substring(4,6), color1.substring(8,10), color1.substring(12,14)];
    const color2 = `rgb(${rgb.map(c => ((c) + 100.8)).join()})`;
    console.log(color2)
    return (
      <div className="ColorBar" style={{background: `linear-gradient(${color1}, ${color2})`}}  />
    );
  }
  export default ColorBar;
