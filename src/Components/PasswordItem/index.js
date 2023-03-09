import './index.css'

const PasswordItem = props => {
  const {passwordItem, onDeletePasswordItem, showPassword} = props
  const {name, website, password, id} = passwordItem
  const onClickDelete = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li>
      <div className="inline-elements">
        <h1 className="icon">{name[0]}</h1>
        <div>
          <p className="fonts">{website}</p>
          <p className="fonts">{name}</p>
          {showPassword && <p className="fonts">{password}</p>}
          {!showPassword && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
