function PopUp({ characters }) {
  const options = characters
    .filter((item) => item.found === false)
    .map((item, index) => <li key={index}>{item.name}</li>);

  return <div className="pop-up">{options}</div>;
}

export default PopUp;
