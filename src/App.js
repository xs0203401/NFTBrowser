import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Image, Input, Layout, List, message } from "antd";
import { searchNFTs } from "./utils";
import { Content, Header } from "antd/lib/layout/layout";
import { useState } from "react";
import NftCard from "./components/NftCard";

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
        style={{ height: "calc(100% - 64px)", padding: 20, overflowY: "auto" }}
      >
        <Input.Group compact>
          <Input
            style={{ width: 300 }}
            placeholder="Enter a NFT name to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary" loading={loading} onClick={handleSearch}>
            Search
          </Button>
        </Input.Group>
        <List
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}
          renderItem={(nft) => <NftCard nft={nft} />}
        />
      </Content>
    </Layout>
  );
}

export default App;
