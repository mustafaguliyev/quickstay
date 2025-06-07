/* eslint-disable no-constant-binary-expression */
import { BrowserRouter } from 'react-router-dom'
import Routing from './pages/Routing'
import { ClerkProvider } from '@clerk/clerk-react'
import RoomDetails from './pages/RoomDetails'

function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  console.log(PUBLISHABLE_KEY)
  if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
      <RoomDetails/>
        <Routing />
      </BrowserRouter>
    </ClerkProvider>

  )
}

export default App