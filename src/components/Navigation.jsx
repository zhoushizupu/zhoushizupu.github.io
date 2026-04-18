import { useState } from 'react'
import './Navigation.css'

function Navigation({ familyData, onPersonSelect, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    
    if (term.trim()) {
      const results = Object.values(familyData.family.persons).filter(person =>
        person.name.toLowerCase().includes(term.toLowerCase())
      )
      setSearchResults(results)
      setShowSearch(true)
    } else {
      setSearchResults([])
      setShowSearch(false)
    }
  }

  const handleSelectPerson = (person) => {
    onPersonSelect(person)
    setShowSearch(false)
    setSearchTerm('')
    setSearchResults([])
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowSearch(false)
    }, 200)
  }

  return (
    <div className="navigation">
      <div className="nav-brand">周氏家族谱</div>
      <div className="nav-search">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={handleSearch}
          onBlur={handleBlur}
          placeholder="搜索家族成员..."
          className="search-input"
        />
        {showSearch && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map(person => (
              <div
                key={person.id}
                className="search-result-item"
                onClick={() => handleSelectPerson(person)}
              >
                {person.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={onLogout} className="logout-button">
        退出登录
      </button>
    </div>
  )
}

export default Navigation
