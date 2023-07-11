import logo from "./logo.svg";
import "./App.css";
import { Button, Input, Layout, message } from "antd";
import { searchNFTs } from "./utils";
import { Content, Header } from "antd/lib/layout/layout";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleButtonClick = async () => {
    searchNFTs("car");
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchNFTs(searchText);
    } catch (error) {
      message.error(error.message);
    } finally {
    }
  };

  return (
    // <div className="App">
    //   <Button onClick={handleButtonClick}>Test</Button>
    // </div>
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 6, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{ height: "calc(100% - 64px)", padding: 20, overflow: "auto" }}
      >
        <Input.Group compact style={{ width: 500 }}>
          <Input
            style={{
              width: "calc(100% - 200px)",
            }}
            defaultValue="https://ant.design"
          />
          <Button type="primary" onClick={handleSearch}>
            Submit
          </Button>
        </Input.Group>
      </Content>
    </Layout>
  );
}

export default App;
