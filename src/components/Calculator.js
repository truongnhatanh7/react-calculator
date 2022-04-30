import { useReducer } from 'react'
import "./Calculator.css"
import { reducer } from './reducer.js'

const initialState = {
  result: '0',
  prevValue: '0',
  prevOperator: '',
  completed: true
}

export default function Calculator() {

  const [result, dispatchResult] = useReducer(reducer , initialState)

  function handleBtnClick(e) {
    console.log("btn");
    
    dispatchResult({type: e.target.value, payload: e.target.value})
  }

  return (
  <>
    <div className="calculator">
    <div className="result">{result.result}</div>
      
      <button onClick={handleBtnClick} key={'+'} value={'+'}>+</button>
      <button onClick={handleBtnClick} key={'-'} value={'-'}>-</button>
      <button onClick={handleBtnClick} key={'*'} value={'*'}>*</button>
      <button onClick={handleBtnClick} key={'/'} value={'/'}>/</button>

      <button onClick={handleBtnClick} key={7} value={7}>7</button>
      <button onClick={handleBtnClick} key={8} value={8}>8</button>
      <button onClick={handleBtnClick} key={9} value={9}>9</button>
      <button onClick={handleBtnClick} key={0} value={0}>0</button>

      <button onClick={handleBtnClick} key={4} value={4}>4</button>
      <button onClick={handleBtnClick} key={5} value={5}>5</button>
      <button onClick={handleBtnClick} key={6} value={6}>6</button>
      <button onClick={handleBtnClick} key={'C'} value={'C'}>C</button>

      <button onClick={handleBtnClick} key={1} value={1}>1</button>
      <button onClick={handleBtnClick} key={2} value={2}>2</button>
      <button onClick={handleBtnClick} key={3} value={3}>3</button>
      <button onClick={handleBtnClick} key={'='} value={'='}>=</button>

    </div>
    </>
  )
}