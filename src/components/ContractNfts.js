import { Button, Modal, Table } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const columns = [];

const data = [];

const ContractNfts = () => {
  return (
    <>
      <Button
        style={{ border: "none" }}
        size="large"
        shape="circle"
        icon={<InfoCircleOutlined />}
        onClick={() => setModalOpen(true)}
      />
      <Modal
        width={1000}
        title="NFT(s) List"
        destroyOnClose
        open={modalOpen}
        footer={null}
      >
        <Table columns={columns} dataSource={data} />
      </Modal>
    </>
  );
};

export default ContractNfts;
