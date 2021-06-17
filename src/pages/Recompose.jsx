import { withState, withHandlers, compose } from 'recompose'

// const onClick = (updateValue, value) => {
//   updateValue(value+1)
// }

const Recompose = ({ value, value2, value3, onClick, onClick2 }) => { 
  // const onClick = () => updateValue(value+1)
  return (
    <div>
      <button onClick={onClick}>Clique aqui para alterar teste</button>
      <h1>Teste {value}</h1>
      <button onClick={onClick2}>Clique aqui para alterar o valor do outro teste</button>
      <h2>Outro teste {value2}</h2>
      <h3>Outro teste do outro teste {value3}</h3>
    </div>
  )
}

const state = withState('value',  'updateValue', 1)
const state2 = withState('value2',  'updateValue2', 2)
const state3 = withState('value3',  'updateValue3', 3)

const handler1 = withHandlers({
  onClick: ({ updateValue, value }) => () => {
    updateValue(value+1)
  }
})

const handler2 = withHandlers({
  onClick2: ({ updateValue2, value2, onClick }) => () => {
    updateValue2(value2+1)
    onClick()
  }
})

const states = compose(
  state,
  state2,
  state3
)

const handlers = compose(
  handler1,
  handler2
)

const enhancer = compose(
  states,
  handlers
)

export default enhancer(Recompose)