import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Stockholm", "Tokyo", "Paris", "Oslo"];

  // Event handler
  const handleClick = (event: MouseEvent) =>
    console.log(event.target.outerText, event);

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No list found</p>}
      <ul className="list-group">
        {items.map((item, key) => (
          <li className="list-group-item" key={key} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
