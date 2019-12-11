import React from 'react';
import { Link } from 'react-router-dom';
import VidtubeLogo from '../logo/logo';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  showDropdown(e) {
    this.setState({showDropdown: true });
  }

  hideDropdown(e) {
    this.setState({ showDropdown: false });
  }

  toggleDropdown(e) {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    const { currentUser, logoutUser } = this.props;

    const gearDropDown = this.state.showDropdown ? (
      <div className="gearDropDown">
        <header>
          <img src={window.mochiIcon} className="profile-picture"/>
          {currentUser.username}
        </header>
        <section 
          onMouseDown={() => {
            this.hideDropdown();
            logoutUser(); }} 
          className="pointer">
          <img src={window.signOutIcon} />
          <span>Sign Out</span>
        </section>
      </div>
    ) : null;
    return (
      <>
        <header className="main-nav-container">
          <nav className="left-nav">
            {/* <img src={window.hamburgerIcon} className="small-img convert-gray" /> */}
            <div>
              <VidtubeLogo />
            </div>
          </nav>
          <nav className="center-nav">
            <input type="search" placeholder="Search"/>
            <div className="pointer"><img src={window.searchIcon}/></div>
          </nav>
          <nav className="right-nav">
            <img src={window.addVideoIcon} className="convert-gray"/>
            {/* <img src={window.appsIcon} className="small-img convert-gray"/>
            <img src={window.notificationIcon} className="small-img convert-gray"/> */}
            {currentUser ? 
              <>
                <div 
                  onBlur={this.hideDropdown}
                  onFocus={this.showDropdown}
                  tabIndex="0">
                  <img
                    src={window.mochiIcon}
                    className="profile-picture pointer"
                    onMouseDown={this.toggleDropdown}
                    tabIndex="0"
                  />
                  {gearDropDown}
                </div>
              </>
              : <Link to="/login">
                  <img src={window.blueUserIcon} />
                  <span>SIGN IN</span>
                </Link> }
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;