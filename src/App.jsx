import { useState, useEffect } from 'react'
import FamilyTree from './components/FamilyTree'
import Navigation from './components/Navigation'
import PersonCard from './components/PersonCard'
import './App.css'

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [familyData, setFamilyData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    console.log('开始加载数据...')
    setIsLoading(true)
    setLoadError('')

    fetch('/data/family.json')
      .then(response => {
        console.log('响应状态:', response.status)
        if (!response.ok) {
          throw new Error(`数据文件加载失败：${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log('数据加载成功:', data)
        setFamilyData(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading family data:', error)
        setLoadError('数据加载失败：' + error.message)
        setIsLoading(false)
      })
  }, [])

  const handlePersonSelect = (person) => {
    setSelectedPerson(person)
  }

  const handleCloseCard = () => {
    setSelectedPerson(null)
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
