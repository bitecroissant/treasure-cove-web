import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "../Login/LoginButton"
import { LogoutButton } from "../Login/LogoutButton"
import { Avatar, Flex, Layout, theme } from "antd"
import { Header, Content, Footer } from "antd/es/layout/layout"


export const CommonLayout: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const isLogin = !isLoading && isAuthenticated

  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();

  return (<>
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: colorPrimary, padding: 0, height: '32px', lineHeight: '32px', color: '#fff' }}>
        <p style={{ height: '32px', width: '10%', textAlign: 'center'}}>x</p>
        <p style={{ height: '32px', width: '85%', textAlign: 'center'}}>
          {(isLogin) ? (
            <Flex gap="small" vertical={false} justify="center" align="center">
              <Avatar src={user?.picture} alt={user?.name} shape="square" size='small' /> <h3>{user?.name}</h3> <p>{user?.email}</p>
            </Flex>
          ) : '宝藏湾'}
        </p>
        <p style={{ height: '32px', width: '5%', textAlign: 'center' }}></p>
      </Header>
      <Content style={{ padding: '0 48px', marginTop: '64px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {isLogin ? <LogoutButton /> : <LoginButton />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        treasure cove ©{new Date().getFullYear()} Created by guakun
      </Footer>
    </Layout>
  </>)
}