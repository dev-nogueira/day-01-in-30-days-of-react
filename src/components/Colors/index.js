import React, { useState } from 'react';
import { Container, Color, Button } from './styles';

function Colors() {  
  const [ColorsValues, setColorsValues] = useState([])

  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color.toUpperCase()
  }

  function genColor() {
    var indents = []

    for (var i = 0; i < 5; i++) {
      var color = hexaColor()
      indents.push(<Color whileHover={{ scale: 1.1 }} bgc={color} key={i}>{color}</Color>);
    }

    setColorsValues(indents)
  }

  return (
    <Container>
      {ColorsValues}
      <Button whileHover={{ scale:0.9 }} whileTap={{ scale: 1.1 }} onClick={() => genColor()}>
        new colors
      </Button>
    </Container>
  );
}

export default Colors;