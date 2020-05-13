import './interval.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { changeMinNumber, changeMaxNumber } from '../store/actions/numbers'

const Interval = props => {
  const { min, max } = props
  return (
    <Card title='Interval of Numbers' red>
      <div className='interval'>
        <span>
          <strong>Mínimo:</strong>
          <input
            type='number'
            value = { min }
            onChange = {e => props.changeMIN(+e.target.value)}
            />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type='number'
            value = { max }
            onChange = {e => props.changeMaxNumber(+e.target.value)}
            />
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

function mapDispatchToProp(dispatch){
  return {
    changeMIN(novoNumber) {
      const action = changeMinNumber(novoNumber)
      dispatch(action)
    },

    changeMaxNumber(novoNumber){
      const action = changeMaxNumber(novoNumber)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProp)(Interval)
