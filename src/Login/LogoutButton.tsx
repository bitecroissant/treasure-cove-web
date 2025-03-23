import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "antd"

export const LogoutButton: React.FC = () => {
    const {logout} = useAuth0()

    return (<Button onClick={()=>logout()}>退出登录</Button>)
}