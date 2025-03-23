import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

// The domain of your Auth0 tenant. Generlly, you can find this in the Auth0 Dashboard under your Application's Settings in the domain field. If you are using a custom domain, you should set this to the value of your custom domain instead.
// Add custom domain ask to verfiy credit card, so i havent config it.
const domain = import.meta.env.VITE_AUTH0_DOMAIN
// The ID of the Auth0 Application you set up earlier in this quickstart. You can find this in the Auth0 Dashboard under your Application's Settings in the Client ID field.
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
// The URL in your application that you would like Auth0 to redirect users to after they have authenticated. This corresponds to the callback URL you set up earlier in this quickstart. You can also find this value in the Auth0 Dashboard under your Application's Settings in the Callback URLs field. Make sure what you enter in your code matches what you set up earlier or your users will see an error.
const redirectUrl = window.location.origin
const authParams = { redirect_uri: redirectUrl }

createRoot(document.getElementById('root')!).render(
  <Auth0Provider domain={domain} clientId={clientId} authorizationParams={authParams}>
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>,
)
