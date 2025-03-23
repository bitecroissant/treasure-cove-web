import { useAuth0 } from "@auth0/auth0-react"

export const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) { return (<div>加载中</div>) }
  return (
    isAuthenticated && (<div>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>)
  )
  // return (<div>
  //     <img src={user?.picture} alt={user?.name} />
  //     <h2>{user?.name}</h2>
  //     <p>{user?.email}</p>
  //   </div>
  // )
}