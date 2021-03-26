import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css";

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <div className="site-layout-content">
            Opa
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Vacina Para Todos
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
