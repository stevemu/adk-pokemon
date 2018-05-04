import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from './redux/actions'

import Chart from './Chart';
import Switch from './Switch';
import Search from './Search';

class App extends Component {
  componentDidMount() {
    this.props.setTitle('POKEMON');
    this.props.setPokemon("Pikachu");
  }

  render() {
    let {name, attack, defense, stamina, age} = this.props.pokemon;

    return (
      <div>
        <div className="container">
          <div className="header">
            Search for {this.props.title}
          </div>
          <div className="search">
            <Search />
          </div>
          <div className="profile">
            <div>
              <img className="profile-img" src={`./images/${name}.png`} />
            </div>
            <div className="profile-title">{name}</div>
            <div className="attributes">
              <div>Attack: {attack}</div>
              <div>Defense: {defense}</div>
              <div>Stamina: {stamina}</div>
              <div>Age: {age}</div>
            </div>
          </div>
          <div className="main">
            <Switch />
            <Chart />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ title, pokemon }) => {
  return {
    title,
    pokemon
  }
}

const VisibleApp = connect(
  mapStateToProps,
  actions
)(App)

export default VisibleApp
