import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [visibilityState, setVisibilityState] = useState(false)
  let lists = [
    "Dhaka",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Mymensingh",
    "Rangpur",
    "Cittagong",
    "Rajshahi"

  ]
  const handleSelectedItem = (a: string) => {
    console.log(a)
  }
  return (

    <div>
      <ListGroup lists={lists} heading="Divisions" onSelected={handleSelectedItem} />
      {visibilityState && <Alert onClose={() => setVisibilityState(false)} children="Hello World" />}

      <Button label="Show Alert" buttonType="danger" onClick={() => { setVisibilityState(true) }} />
    </div>
  );
}

export default App;
