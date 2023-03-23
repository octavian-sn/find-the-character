function PopUp({ characters, clickData, characterSelect, notification }) {
  let content = '';
  const coordinates = {
    top: clickData.pageY,
    left: clickData.pageX,
  };
  if (!notification) {
    content = characters
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
  } else content = notification;

  return (
    <div style={coordinates} className="pop-up">
      {content}
    </div>
  );
}

export default PopUp;
