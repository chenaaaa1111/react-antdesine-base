import React from 'react';
// import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Headerlines from "./headerlines/Headerlines";

const { Header, Content, Footer } = Layout;// 由于 antd 组件的默认文案是英文，所以需要修改为中文

class Home extends React.PureComponent {
  state = {
    date: null,
  };

  
  render() {
    const { date } = this.state;
     return (
      <Layout>
          <Header>
            <Headerlines></Headerlines>
          </Header>
          <Content></Content>
          <Footer></Footer>
      </Layout>
    );
  }
}

export default Home;