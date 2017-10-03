import React from 'react'
import {connect} from 'react-redux'
import NavBar from './NavBar'

const Item = (props) => {
  const user = props.items.find((i) => {
    return i.location.postcode === parseInt(props.match.params.item)
  })
  
  if (!user) {
    return <div>Sorry, but the user was not found</div>
  }
  return(
    <div>
      <NavBar />
      <h1>{`${user.name.first} ${user.name.last}`}</h1>
      <p></p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Item)
