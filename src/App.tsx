import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "London", "Tokyo", "Mumbai", "Japan"];

  const itemSelected = () => {
    console.log("item selected");
  };

  return (
    <div>
      <ListGroup items={items} heading="CITIES" onSelectItem={itemSelected} />
    </div>
  );
}

export default App;
