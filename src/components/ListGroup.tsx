import { Fragment, useState } from "react";

// Props  {items: [], heading: String}
interface ListGroupProps {
  items: string[];
  heading: string;
  // function that takes in string and returns void
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// Kan skriva props.items etc överallt men går fortare att destructura props: till {}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
