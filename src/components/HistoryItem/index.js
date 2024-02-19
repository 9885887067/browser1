import './index.css'

const HistoryItem = props => {
  const {historyObj, deleteItem} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyObj

  const onClickDeleteButton = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="lists">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" />
        <p className="title">{title}</p>
        <p className="url" alt="domain logo">
          {domainUrl}
        </p>
      </div>
      <div>
        <button
          className="button"
          data-testid="delete"
          type="button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-logo"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
