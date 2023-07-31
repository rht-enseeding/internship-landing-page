import { Button, Result, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const RegisterSuccess = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Result
        status="success"
        title={
          <Title level={2} style={{ fontSize: "40px" }}>
            Verification Link Send Successfully!
          </Title>
        }
        subTitle={
          <Text style={{ fontSize: "24px" }}>
            Check your Inbox and confirm your email address.
          </Text>
        }
        
        // extra={[
        //   <Button type="primary" key="console">
        //     Go Console
        //   </Button>,
        //   <Button key="buy">Buy Again</Button>,
        // ]}
      />
    </div>
  );
};

export default RegisterSuccess;
