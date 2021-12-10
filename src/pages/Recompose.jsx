import { withState, withHandlers, compose } from 'recompose'

// const onClick = (updateValue, value) => {
//   updateValue(value+1)
// }

const Recompose = ({ value1, value2, value3, onClick1, onClick2, onClick3 }) => { 
  // const onClick = () => updateValue(value+1)
  return (
    <div>
      <button onClick={onClick1}>Clique aqui para alterar a quantidade de tomates</button>
      <p>{value1} &#127813;</p>
      <button onClick={onClick2}>Clique aqui para alterar a quantidade de uvas</button>
      <p>{value2} &#127815;</p>
      <button onClick={onClick3}>Clique aqui para alterar a quantidade de melancias</button>
      <p>{value3} &#127816;</p>
    </div>
  )
}

const state1 = withState('value1',  'updateValue1', 1)
const state2 = withState('value2',  'updateValue2', 1)
const state3 = withState('value3',  'updateValue3', 1)

const handler1 = withHandlers({
  onClick1: ({ updateValue1, value1 }) => () => {
    updateValue1(value1+1)
  }
})

const handler2 = withHandlers({
  onClick2: ({ updateValue2, value2 }) => () => {
    updateValue2(value2+1)
  }
})

const handler3 = withHandlers({
  onClick3: ({ updateValue3, value3 }) => () => {
    updateValue3(value3+1)
  }
})

const states = compose(
  state1,
  state2,
  state3
)

const handlers = compose(
  handler1,
  handler2,
  handler3
)

const enhancer = compose(
  states,
  handlers
)

export default enhancer(Recompose)