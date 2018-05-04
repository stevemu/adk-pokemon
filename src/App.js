import React, { Component } from 'react'
import './scss/main.scss'

import { connect } from 'react-redux'
import * as actions from './redux/actions'

class App extends Component {
  componentDidMount() {
    this.props.setTitle('POKEMON`')
  }

  render() {
    return (
      <div>

        {/*
              <h1>{this.props.title}</h1>

      */}
        <div className="container">
          <div className="header">
            Search for Pokemon
          </div>
          <div className="search">
            <input className="search-input" />
          </div>
          <div className="profile">
            <div>
              <img className="profile-img" src="./images/pokemon.png" />
            </div>
            <div className="profile-title">Charmander</div>
            <div className="attributes">
              <div>Attack: 128</div>
              <div>Defense: 108</div>
              <div>Stamina: 78</div>
              <div>Age: 21</div>
            </div>
          </div>
          <div className="main">
            Main
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ title }) => {
  return {
    title
  }
}

const VisibleApp = connect(
  mapStateToProps,
  actions
)(App)

export default VisibleApp
