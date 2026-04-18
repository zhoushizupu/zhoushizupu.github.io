import { useState, useEffect } from 'react'
import Login from './components/Login'
import FamilyTree from './components/FamilyTree'
import Navigation from './components/Navigation'
import PersonCard from './components/PersonCard'
import './App.css'

const PASSWORD = '123456'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [familyData, setFamilyData] = useState(null)

  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    
    fetch('./data/family.json')
      .then(response => response.json())
      .then(data => {
        setFamilyData(data)
      })
      .catch(error => console.error('Error loading family data:', error))
  }, [])

  const handleLogin = (password) => {
    if (password === PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('isAuthenticated', 'true')
      return true
    }
    return false
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  const handlePersonSelect = (person) => {
    setSelectedPerson(person)
  }

  const handleCloseCard = () => {
    setSelectedPerson(null)
  }

  if (!familyData) {
    return <div className="loading">加载中...</div>
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="app">
      <Navigation 
        familyData={familyData} 
        onPersonSelect={handlePersonSelect}
        onLogout={handleLogout}
      />
      <FamilyTree 
        familyData={familyData} 
        onPersonSelect={handlePersonSelect}
      />
      {selectedPerson && (
        <PersonCard 
          person={selectedPerson} 
          familyData={familyData}
          onClose={handleCloseCard}
        />
      )}
    </div>
  )
}

export default App
