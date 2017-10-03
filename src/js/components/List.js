import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom'
import Item from './Item'
import NavBar from './NavBar'
import { itemsFetchData } from '../../actions/random'


class List extends Component {
  render() {
    return(
      <div>
        <div>
          <NavBar />
        </div>
        <ul>
          {
            this.props.items.map((item, index) => (
              <li key={index}>
                <Link to={`/list/${item.location.postcode}`}>{item.name.first}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(List)
