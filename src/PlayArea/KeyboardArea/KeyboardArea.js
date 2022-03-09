import Keyboard from './Keyboard';
import './KeyboardArea.css';

//Displays the Keyboard area
//Used to input letters into PlayArea
const KeyboardArea = () => {
  //the keys for the keyboard
  const keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['enter','z','x','c','v','b','n','m','del']
  ];

  return (
    <Keyboard keys={keys} />
  )
}

export default KeyboardArea;