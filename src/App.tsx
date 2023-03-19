import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
// import ListGroup from "./components/ListGroup";

function App() {
  // tidigare lektioner.
  // let items = ["New York", "Stockholm", "Tokyo", "Paris", "Oslo"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }; children={"klicka miigj"}

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong> I want Tacos
        </Alert>
      )}
      {/* Det går också att inte skriva något mellan >< och ha children={"klicka miig"} som attribute */}
      {/* color="secondary" behövs inte med 'color?: string' i comp-Button interfacet! */}
      <Button color="success" påClick={() => setAlertVisibility(true)}>
        Hejsan Knapp
      </Button>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
