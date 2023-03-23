function PopUp({ characters, clickData, characterSelect }) {
  const coordinates = {
    top: clickData.pageY,
    left: clickData.pageX,
  };

  const options = characters
    .filter((item) => item.found === false)
    .map((item, index) => (
      <li
        onClick={() => characterSelect(item.name, clickData)}
        key={index}
        id={item.name}
      >
        {item.name}
      </li>
    ));

  return (
    <div style={coordinates} className="pop-up">
      {options}
    </div>
  );
}

export default PopUp;
