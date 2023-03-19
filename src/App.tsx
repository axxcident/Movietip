import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

function App() {
  // tidigare lektioner.
  // let items = ["New York", "Stockholm", "Tokyo", "Paris", "Oslo"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <Alert>
        Hejsan <span>Varlden</span>
      </Alert>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
