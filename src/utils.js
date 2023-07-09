const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk2YzQyMjYwLTRiMDQtNDQzOS05YTNjLTIyMzg4Y2ZjNDA5NiIsIm9yZ0lkIjoiMzQ3MzgzIiwidXNlcklkIjoiMzU3MDc4IiwidHlwZUlkIjoiZWNlMDFmZjQtODZlOS00YzY0LWIwMDItZWE5MGM3ZGQxMzU4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODg4NzA5MTMsImV4cCI6NDg0NDYzMDkxM30.KCEXcn2IwTfVOVsFMBW8Aryx7lMHy0hZipDiBiMsqnk";

// https://docs.moralis.io/reference/nft-api
export const searchNFTs = async (searchText) => {
  const url = new URL(`${origin}/api/v2/nft/search`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("q", searchText);
  url.searchParams.append("filter", "name");
  url.searchParams.append("limit", "12");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
