import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "antd"

export const LoginButton: React.FC = () => {
    const {loginWithRedirect} = useAuth0()

    return (<Button onClick={()=>loginWithRedirect()}  type="primary">去登陆</Button>)
}