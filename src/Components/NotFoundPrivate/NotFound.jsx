import { Result } from "antd";
import React from "react";

const NotFound = () => {
  return (
    <div className="notFoundPrivate">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        // extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default NotFound;
