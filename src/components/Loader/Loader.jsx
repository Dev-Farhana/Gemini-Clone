import React from "react";
import { Flex, Spin } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const contentStyle = {
  padding: 20,
};

const Loader = () => (
  <Flex 
    justify="center"
    align="center"
    style={{ marginLeft: "40px" }}
  >
    <Spin tip="Loading">
      <div style={contentStyle} />
    </Spin>
  </Flex>
);


const MyUser = () => (
  < Avatar
    style={{
        background: "linear-gradient(16deg,#4b90ff,#ff5546)"
    }}
    icon={<UserOutlined />}
  />
);

export { MyUser, Loader };
