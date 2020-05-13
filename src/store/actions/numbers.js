import { NUM_MIN_CHANGED, NUM_MAX_CHANGED } from './actionsTypes'

export function changeMinNumber(novoNumber){
  return {
    type: NUM_MIN_CHANGED,
    payload: novoNumber
  }
}

export function changeMaxNumber(novoNumber){
  return {
    type: NUM_MAX_CHANGED,
    payload: novoNumber
  }
}
