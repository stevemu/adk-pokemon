import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import * as actions from './redux/actions'
import { connect } from 'react-redux'

const countryOptions = [
  { key: 'Pikachu', value: 'Pikachu', text: 'Pikachu' },
  { key: 'Celebi', value: 'Celebi', text: 'Celebi' },
  { key: 'Eevee', value: 'Eevee', text: 'Eevee' },

]

class Search extends Component {
  render() {
    return (
      <div>
        <Dropdown placeholder='Select Animal'
          fluid
          search
          selection
          options={countryOptions} 
          onChange={(e, data) => {
            // get the animal title
            let val = data.value;

            // set correct pokemon in the store
            this.props.setPokemon(val);
          }}
          />
      </div>
    )
  }
}

const mapStateToProps = ({ title }) => {
  return {
    title
  }
}

const SearchContainer = connect(
  mapStateToProps,
  actions
)(Search)

export default SearchContainer;