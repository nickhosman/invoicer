import { Routes, Route } from 'react-router-dom'
import Auth from './Auth'
import Profile from './Profile'
import Invoice from './Invoice'
import InvoiceForm from './InvoiceForm'
import SignUpForm from './SignUpForm'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/invoice/create" element={<InvoiceForm />} />
      </Routes>
    </>
  )
}

export default App
