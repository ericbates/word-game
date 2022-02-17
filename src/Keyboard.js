const KeyboardKey = (props) => {
  const key = props.value;
  return (
    <div className="keyboard-key">
      <p>{key}</p>
    </div>
  );
};

const Keyboard = () => {
  //the keys for the keyboard
  const keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['enter','z','x','c','v','b','n','m','delete']
  ];

  //create 3 rows of KeyboardKey components
  const rows = [];
  for(let i = 0; i < keys.length; i++){
    const row = [];
    keys[i].forEach(key => {
      row.push(
        <KeyboardKey value={key} key={key} />
      );
    });
    rows.push(row);
  }

  return (
    <div className="keyboard">
      <div className="keyboardRow">
        {rows[0]}
      </div>
      <div className="keyboardRow">
        {rows[1]}
      </div>
      <div className="keyboardRow">
        {rows[2]}
      </div>
    </div>
  );
};

export default Keyboard;