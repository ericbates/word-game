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
    ['ent','z','x','c','v','b','n','m','del']
  ];

  //create 3 rows of KeyboardKey components
  const rows = keys.map(keyRow => keyRow.map(key => <KeyboardKey value={key} key={key} />));

  return (
    <section className="keyboard">
      <div className="keyboardRow">
        {rows[0]}
      </div>
      <div className="keyboardRow">
        {rows[1]}
      </div>
      <div className="keyboardRow">
        {rows[2]}
      </div>
    </section>
  );
};

export default Keyboard;