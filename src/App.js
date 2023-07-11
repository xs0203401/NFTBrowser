import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { searchNFTs } from "./utils";
import Moralis from "moralis";

function App() {
  const handleButtonClick = async () => {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk2YzQyMjYwLTRiMDQtNDQzOS05YTNjLTIyMzg4Y2ZjNDA5NiIsIm9yZ0lkIjoiMzQ3MzgzIiwidXNlcklkIjoiMzU3MDc4IiwidHlwZUlkIjoiZWNlMDFmZjQtODZlOS00YzY0LWIwMDItZWE5MGM3ZGQxMzU4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODg4NzA5MTMsImV4cCI6NDg0NDYzMDkxM30.KCEXcn2IwTfVOVsFMBW8Aryx7lMHy0hZipDiBiMsqnk",
    });

    await Moralis.EvmApi.nft.searchNFTs({
      chain: "eth",
      format: "decimal",
      q: "car",
      filter: "name",
      limit: 12,
    });
  };

  return (
    <div className="App">
      <Button onClick={handleButtonClick}>Test</Button>
    </div>
  );
}

export default App;
