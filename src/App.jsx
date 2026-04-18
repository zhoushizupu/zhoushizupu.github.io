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
  const [isLoading, setIsLoading] = useState(false)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      setFamilyData(null)
      setLoadError('')
      return
    }

    setIsLoading(true)
    setLoadError('')

    fetch('./data/family.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`数据文件加载失败: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setFamilyData(data)
      })
      .catch(error => {
        console.error('Error loading family data:', error)
        setLoadError('数据加载失败，请刷新页面重试')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [isAuthenticated])

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
    setFamilyData(null)
  }

  const handlePersonSelect = (person) => {
    setSelectedPerson(person)
  }

  const handleCloseCard = () => {
    setSelectedPerson(null)
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  if (isLoading) {
    return <div className="loading">加载中...</div>
  }

  if (loadError) {
    return <div className="loading">{loadError}</div>
  }

  if (!familyData) {
    return <div className="loading">暂无数据</div>
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
