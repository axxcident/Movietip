import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Stockholm", "Tokyo", "Paris", "Oslo"];

  // let selectedIndex = 0;
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // array1 variabeln
  // array2 upDater

  // Event handler "list-group-item"
  // const handleClick = (event: MouseEvent) => console.log(event.target);

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No list found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
