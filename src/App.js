import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Image, Input, Layout, List, message } from "antd";
import { searchNFTs } from "./utils";
import { Content, Header } from "antd/lib/layout/layout";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [nfts, setNfts] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button type="primary" onClick={handleSearch} loading={loading}>
            Submit
          </Button>
        </Input.Group>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={nfts}
          renderItem={(item) => (
            <List.Item>
              <Card title={JSON.parse(item.metadata).name}>
                <Image src={JSON.parse(item.metadata).image}></Image>
              </Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default App;
