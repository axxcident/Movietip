import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "Stockholm", "Tokyo", "Paris", "Oslo"];
  items = [];

  // items = [];
  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No list found</p>
  //     </>
  //   );
  // }

  return (
    <Fragment>
      {/* kan också strunta i att ha Fragment och bara skriva "<>". behöver inte ens import nu */}
      <h1>List</h1>
      {items.length === 0 && <p>No list found</p>}
      <ul className="list-group">
        {items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
