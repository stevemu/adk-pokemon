import React, { Component } from 'react'
import './scss/main.scss'
import { Checkbox } from 'semantic-ui-react'


export default class extends Component {
  render() {
    return (
      <div className="switch">
        <div>Statistics</div>
        <Checkbox className="slider" slider />
        <div>Moves</div>
      </div>
    )
  }
}

