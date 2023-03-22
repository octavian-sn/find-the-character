function PopUp({ characters, clickData }) {
  const coordinates = {
    top: clickData.pageY,
    left: clickData.pageX,
  };

  const options = characters
    .filter((item) => item.found === false)
    .map((item, index) => <li key={index}>{item.name}</li>);

  return (
    <div style={coordinates} className="pop-up">
      {options}
    </div>
  );
}

export default PopUp;
