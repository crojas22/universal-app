import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import NavBar from './NavBar'
import {increaseCounter, decreaseCounter} from '../../actions/counter'

const Home = ({counter, decreaseCounter, increaseCounter}) => (
  <div>
    <div>
      <NavBar />
    </div>
    <div>
      <button onClick={decreaseCounter}> - </button>
        {counter}
      <button onClick={increaseCounter}> + </button>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({increaseCounter, decreaseCounter}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
