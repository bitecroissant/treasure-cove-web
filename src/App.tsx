import './App.css'

import { LoginButton } from './Login/LoginButton'
import { LogoutButton } from './Login/LogoutButton'
import { Profile } from './Login/Profile'

function App() {
  return (
    <>
      <h1>你好哇,我的朋友</h1>
      <h2></h2>
      <Profile />
      <LoginButton />
      <p></p>
      <LogoutButton />
    </>
  )
}

export default App
