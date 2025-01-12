import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/Navbar/Navbar'
import BreadcrumbNavbar from './components/BreadcrumbNavbar/BreadcrumbNavbar'
import Card from './components/Card/Card'
import ButtonContainer from './components/ButtonContainer/ButtonContainer'
import CardSection from './components/CardSection/CardSection'
import AddCardForm from './components/AddCardForm/AddCardForm'
import CardPage from './pages/CardPage/CardPage'

function App() {
  return (
    

    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden"}}>
        <Navbar />
        <BreadcrumbNavbar />
        <div style={{ flex: 1, overflowY: "auto" ,scrollbarWidth: "none"}}>
          <CardPage />
        </div>
      </div>
    </div>
  )
}

export default App
