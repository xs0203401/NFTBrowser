import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { searchNFTs } from "./utils";

function App() {
  const handleButtonClick = () => {
    searchNFTs("car");
  };

  return (
    <div className="App">
      <Button onClick={handleButtonClick}>Test</Button>
    </div>
  );
}

export default App;
