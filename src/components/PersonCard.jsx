import './PersonCard.css'

function PersonCard({ person, familyData, onClose }) {
  if (!person) return null

  const getFamilyMembers = (relationship) => {
    if (!person.family?.[relationship]) return []
    return person.family[relationship]
      .map(id => familyData.family.persons[id])
      .filter(p => p !== undefined)
  }

  const parents = getFamilyMembers('parents')
  const spouses = getFamilyMembers('spouses')
  const children = getFamilyMembers('children')

  return (
    <div className="person-card-overlay" onClick={onClose}>
      <div className="person-card" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        
        <div className="card-header">
          <div className="avatar-container">
            <img 
              src={person.media?.avatar || '/media/default-avatar.png'} 
              alt={person.name}
              className="card-avatar"
              onError={(e) => {
                e.target.src = '/media/default-avatar.png'
              }}
            />
          </div>
          <div className="person-info">
            <h2>{person.name}</h2>
            <p className="person-gender">
              {person.gender === 'M' ? '男' : '女'}
            </p>
          </div>
        </div>

        <div className="card-body">
          <div className="info-section">
            <h3>基本信息</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">出生日期：</span>
                <span className="info-value">{person.birthDate || '未知'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">逝世日期：</span>
                <span className="info-value">{person.deathDate || '未知'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">出生地：</span>
                <span className="info-value">{person.birthPlace || '未知'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">职业：</span>
                <span className="info-value">{person.occupation || '未知'}</span>
              </div>
            </div>
          </div>

          {person.achievements && person.achievements.length > 0 && (
            <div className="info-section">
              <h3>成就与荣誉</h3>
              <ul className="achievements-list">
                {person.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {person.biography && (
            <div className="info-section">
              <h3>生平简介</h3>
              <p className="biography-text">{person.biography}</p>
            </div>
          )}

          {person.events && person.events.length > 0 && (
            <div className="info-section">
              <h3>重要事件</h3>
              <div className="events-timeline">
                {person.events.map((event, index) => (
                  <div key={index} className="event-item">
                    <div className="event-date">{event.date}</div>
                    <div className="event-description">{event.description}</div>
                    {event.place && (
                      <div className="event-place">{event.place}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(parents.length > 0 || spouses.length > 0 || children.length > 0) && (
            <div className="info-section">
              <h3>家族关系</h3>
              {parents.length > 0 && (
                <div className="relationship-group">
                  <span className="relationship-label">父母：</span>
                  <span className="relationship-value">
                    {parents.map(p => p.name).join('、')}
                  </span>
                </div>
              )}
              {spouses.length > 0 && (
                <div className="relationship-group">
                  <span className="relationship-label">配偶：</span>
                  <span className="relationship-value">
                    {spouses.map(p => p.name).join('、')}
                  </span>
                </div>
              )}
              {children.length > 0 && (
                <div className="relationship-group">
                  <span className="relationship-label">子女：</span>
                  <span className="relationship-value">
                    {children.map(p => p.name).join('、')}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PersonCard
