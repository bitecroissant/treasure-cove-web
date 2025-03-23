import { useAuth0 } from "@auth0/auth0-react"

export const LogoutButton: React.FC = () => {
    const {logout} = useAuth0()

    return (<button onClick={()=>logout()}>退出登录</button>)
}