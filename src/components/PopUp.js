function PopUp({ characters, clickData, checkPosition }) {
  const coordinates = {
    top: clickData.pageY,
    left: clickData.pageX,
  };

  const options = characters
    .filter((item) => item.found === false)
    .map((item, index) => (
      <li
        onClick={() => checkPosition(item.name, clickData)}
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
