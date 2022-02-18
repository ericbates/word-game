import Row from './Row';

//Displays the Keyboard area
//Used to input letters into PlayArea
const Keyboard = () => {
  //the keys for the keyboard
  const keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['enter','z','x','c','v','b','n','m','del']
  ];

  //create Row components for each row of the keyboard
  const rows = keys.map((keyRow, index) => {
    return <Row arr={keyRow} rowNum={index} rowType='keyboard' key={`keyboard-${index}`} />;
  });

  return (
    <section className="keyboard-area">
      {rows}
    </section>
  );
};

export default Keyboard;