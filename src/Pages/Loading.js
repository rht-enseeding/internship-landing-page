import React from "react";
import '../index.css';
import { Alert, Space, Spin } from "antd";

const Loading = () => (
  <div className="d-flex justify-content-center align-items-center loading">
    <Space direction="vertical" style={{ width:"50%", minHeight:"100vh" }} className=" d-flex justify-content-center align-items-center">
      <Space  style={{ width:"100%" }}>
        {/* <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
      <Spin tip="Loading">
        <div className="content" />
      </Spin> */}
        <Spin tip="Loading" size="large">
          <div className="contentx" />
        </Spin>
      </Space>

      {/* <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin> */}
    </Space>
  </div>
);

export default Loading;
