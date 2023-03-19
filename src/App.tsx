import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Stockholm", "Tokyo", "Paris", "Oslo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
