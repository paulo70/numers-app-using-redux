import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Sort =  props => {

  const { min, max } = props
  const sorted = parseInt(Math.random() * (min - max)) + min

  return (
    <Card title='Sort of Numbers' purple>
      <div>
        <span>
          <span>Result:</span>
          <strong>{ sorted }</strong>
        </span>
      </div>
    </Card>
  )
}


function mapStateToProps(state){
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}


export default connect(mapStateToProps)(Sort)
