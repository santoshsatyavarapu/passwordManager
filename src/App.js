import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import './App.css'

import PasswordItem from './Components/PasswordItem/index'

class App extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    passwordList: [],
    showPassword: false,
    search: '',
  }

  onEnterWebsite = event => {
    this.setState({website: event.target.value})
  }

  onEnterUserName = event => {
    this.setState({name: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onAddButton = () => {
    const {website, name, password, passwordList} = this.state
    if (website !== '' && name !== '' && password !== '') {
      const objectNow = {
        id: uuidv4(),
        website,
        name,
        password,
      }
      this.setState({
        passwordList: [...passwordList, objectNow],
        website: '',
        name: '',
        password: '',
      })
    }
  }

  preventDefaultForm = event => {
    event.preventDefault()
  }

  onDeletePasswordItem = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(
      eachElement => eachElement.id !== id,
    )
    this.setState({passwordList: filteredList})
  }

  showPasswordEvent = () => {
    const {showPassword} = this.state
    const answer = !showPassword
    this.setState({showPassword: answer})
  }

  onSearchPasswords = event => {
    const searchInput = event.target.value.toLowerCase()
    this.setState({search: searchInput})
  }

  render() {
    const {
      website,
      name,
      password,
      passwordList,
      showPassword,
      search,
    } = this.state

    const filteredList = passwordList.filter(eachElement =>
      eachElement.website.toLowerCase().includes(search),
    )

    const noOfPasswords = filteredList.length
    const status = noOfPasswords > 0

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card-container">
          <form className="input-card" onSubmit={this.preventDefaultForm}>
            <h1 className="heading">Add New Password</h1>
            <div className="inline-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logos"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-element"
                onChange={this.onEnterWebsite}
                value={website}
              />
            </div>
            <div className="inline-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logos"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-element"
                onChange={this.onEnterUserName}
                value={name}
              />
            </div>
            <div className="inline-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logos"
              />

              <input
                type="password"
                placeholder="Enter Password"
                className="input-element"
                onChange={this.onEnterPassword}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="add-button"
              onClick={this.onAddButton}
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
        <div className="card-container-bottom">
          <div className="inline-heading-container">
            <div className="small-box">
              <h1 className="heading heading-bottom">Your Passwords</h1>
              <p className="noOfPasswords">{noOfPasswords}</p>
            </div>
            <div className="inline-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="input-logos"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-element"
                onChange={this.onSearchPasswords}
              />
            </div>
          </div>
          <hr />
          <label className="show-password">
            <input type="checkbox" onChange={this.showPasswordEvent} />
            Show passwords
          </label>
          <ul>
            {status &&
              filteredList.map(eachElement => (
                <PasswordItem
                  passwordItem={eachElement}
                  key={eachElement.id}
                  onDeletePasswordItem={this.onDeletePasswordItem}
                  showPassword={showPassword}
                />
              ))}
          </ul>
          {!status && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="password-manager-bottom"
            />
          )}
          {!status && <p className="heading special">No Passwords</p>}
        </div>
      </div>
    )
  }
}

export default App
